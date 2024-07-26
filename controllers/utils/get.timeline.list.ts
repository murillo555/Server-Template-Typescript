import { Request, Response } from 'express';
import config from '@config';
const { entityCreate, dataBase } = config.message;
import logger from "@logger"
import { CreateUserBody } from '@interfaces/requests/user';
import { User as UserInterface } from "@interfaces/models/user"
import { User } from '@models';
import { TimeLine } from '@models';
import bcrypt from "bcryptjs"
import dayjs = require('dayjs');
import { TimeLine as TimeLineInterface } from '@interfaces/models/timeline';


interface RequestBody extends Request {
    user: UserInterface
}

const getTimeLineList = async (req: RequestBody, res: Response) => {
    logger.verbose('[TimeLine, timeLineList]', 'Get timeline list');
    let page = req.query.page || 1;
    let query = []
    const { limit = 10, target, description, startdate, enddate, actiontype, userId } = req.query;
    if (startdate && enddate) query.push({ date: { $gte: dayjs(`${startdate}`).toISOString(), $lte: dayjs(`${enddate}`).toISOString() } })
    if (target) query.push({ target: target })
    if (actiontype) query.push({ actionType: actiontype })
    if (userId) query.push({ actionBy: userId })
    query.push({ $or: [{ actionDescription: { $regex: `${description}`, $options: 'i' } }] })
    page = Number(page) - 1;
    logger.silly(query)
    const since = page * Number(limit);

    try {
        const [total, timeLineRecords] = await Promise.all([
            TimeLine.countDocuments({ $and: query } as any),
            TimeLine.find({ $and: query } as any)
                .sort({ date: -1 })
                .skip(Number(since))
                .limit(Number(limit))
                .populate('actionBy')
        ])

        const timeLine = await timeLineRecords?.map((record: TimeLineInterface) => {
            switch (record.actionType) {
                case 'CREATE':
                    record.actionTitle = 'Registro Creado'
                    break;
                case 'DELETE':
                    record.actionTitle = 'Registro Eliminado'
                    break;
                case 'UPDATE':
                    record.actionTitle = 'Registro Actualizado'
                    break;
                case 'ACTIVE':
                    record.actionTitle = 'Registro Activado'
                    break;
                default:
                    break;
            }

            const recordData = {
                _id: record._id,
                date: record.date,
                actionType: record.actionType,
                target: record.target,
                actionBy: record.actionBy,
                actionDescription: record.actionDescription,
                actionTitle: record.actionTitle
            }

            return recordData;
        })


        logger.debug(`Total Records: ${total}`);
        res.json({ total, timeLine });
    } catch (error) {
        logger.error('[TimeLine, timeLineList]', 'Get timeline list', error)
        res.json({ dataBase });
    }

};


export default getTimeLineList;