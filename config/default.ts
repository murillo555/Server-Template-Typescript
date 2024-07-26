import { customerPermission } from "@middlewares/RoleValidation"

const config = {
    logger: {
        console: {
            level: "silly"
        },
        files: [
            {
                level: "debug",
                path: "./logs/",
                name: "debug.log"
            },
            {
                level: "warn",
                path: "./logs/",
                name: "error.log"
            }
        ]
    },
    mailTemplate: {
        es: `<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><style>body{max-width:640px;min-width:640px}span{font-size:18px}.link-button{width:200px!important;padding:16px !important;background:#0f0f0f;border-radius:26px;font-style:normal;font-weight:700;font-size:14px;font-family:verdana;color:#fff!important;box-shadow:-10px 2px 10px #bebebe,10px -2px 10px #fff;color:inherit;text-decoration:inherit}.text-center{text-align:center!important;margin:auto!important}.card-shadow{max-width:640px;border-radius:20px;background:#e0e0e0;box-shadow:-24px 24px 100px #bebebe,24px -24px 100px #fff}.header{background:#0f0f0f!important;border-radius:20px 20px 0 0!important;padding:48px 32px;color:#fff}.img-header{width:230px!important;height:40px!important}.content{padding:32px;background:#fff}.footer{background:#f8fafb;border-radius:0 0 20px 20px!important;max-width:640px!important;min-width:640px!important}p{font-family:verdana;font-style:normal;font-weight:400;font-size:14px;line-height:24px}.img-footer{width:140px!important;height:24px!important;width:100%!important}.footer-content{padding:32px}.w-100{width:100%!important}</style></head><body classname=""><div class="card-shadow"><div class="header"><h1>MX LoadBoard</h1></div><div class="content text-center">$content</div><div class="footer w-100 text-center"><div class="w-100"><div class="footer-content"><p>Comunicación confidencial: Este mensaje de correo electrónico y cualquier archivo adjunto están destinados únicamente al destinatario. Este mensaje de correo electrónico y cualquier archivo adjunto pueden ser privilegiados, confidenciales y estar protegidos contra su divulgación. Si usted no es el destinatario, queda expresamente prohibida su difusión, distribución o copia. Si ha recibido este mensaje por error, notifíquelo inmediatamente al remitente respondiendo a este mensaje.</p></div></div></div></div></body></html>`
    },
    confirmBodyEmail: {
        es: `<h1>Bienvenido a MX LoadBoard</h1><br><span>$firstName $lastName presiona el siguiente boton para confirmar tu correo electronico</span><br><br><a href="$link" class="link-button center" onclick>Confirmar Correo Electronico</a>`
    },
    webUrl: {
        development: "http://localhost:7030/",
        production: "https://test.fletmex.com/",
        undefined: "http://localhost:7030/"
    },
    message: {
        entityCreate: {
            msg: "Entity has been added successfully",
            status: true
        },
        entityUpdate: {
            msg: "Entity has been updated successfully",
            status: true
        },
        entityDelete: {
            msg: "Entity has been Deleted successfully",
            status: true
        },
        entityActive: {
            msg: "Entity has been Activated successfully",
            status: true
        },
        imageUpdate: {
            msg: "Image Updated successfully",
            status: true
        },
        fileUpdate: {
            msg: "File Updated successfully",
            status: true
        },
        badAuth: {
            "msg": "Email or password is invalid",
            "status": false
        },
        notAuth: {
            msg: "You no such to be here ;)",
            status: false
        },
        badCredentials: {
            msg: "You shouldn't be here >:(",
            status: false
        },
        paramsError: {
            msg: "Params Error",
            status: false
        },
        dataBase: {
            "msg": "Database Error Contact your Admin",
            "status": false
        },
        entityExists: {
            "msg": "Entity already exists",
            "status": false
        },
        entityNoExists: {
            "msg": "Entity do not exists",
            "status": false
        }
    },
    routes: {
        users: "users",
        roles: "roles",
        customers: "customers",
        timeLine: "timeLine",
        transportType: "transport-type",
        customer: "customer",
        shipmentPost: "shipment-post"
    },
    permissionList: [
        "users",
        "roles",
        "customers",
        "transport-type",
        "shipment-post"
    ],
    timeLineTarget: [
        "User",
        "Customer",
        "Role",
        "TransportType",
        "ShipmentPost",
        "TransportPost",
        "Search"
    ],
    timeLineTargets: {
        user: "User",
        customer: "Customer",
        role: "Role",
        transportType: "TransportType",
        shipmentPost: "ShipmentPost",
        search: "Search"
    },
    timeLineActionType: {
        create: "CREATE",
        update: "UPDATE",
        remove: "DELETE",
        active: "ACTIVE"
    },
    permissionType: {
        createPermissions: "createPermissions",
        updatePermissions: "updatePermissions",
        deletePermissions: "deletePermissions",
        readPermissions: "readPermissions"
    },
    customerPermission: {
        broker: "broker",
        carrier: "carrier"
    }
}

export default config