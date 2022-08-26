'use strict';
const express = require('express');
const router = express.Router();
const refLead = require("./controller");
const objLead = new refLead();


/**
 * @description get lead details
 */
 router.get('/lead_details/:id', (req, res, next) => {
    objLead.getLeadDetails(req.params.id).then(result => {
        res.status(200).send({ message: result.message, status: 1, data: result.data, status_code: 200 });
    }).catch(err => {
        res.status(err.httpStatus || 500).send({ message: err.message, status: 0, status_code: err.httpStatus || 500 });
    });
})

/**
 * @description get lead officer
 */
 router.get('/lead_officer/:id', (req, res, next) => {
    objLead.getLeadOfficer(req.params.id).then(result => {
        res.status(200).send({ message: result.message, status: 1, data: result.data, status_code: 200 });
    }).catch(err => {
        res.status(err.httpStatus || 500).send({ message: err.message, status: 0, status_code: err.httpStatus || 500 });
    });
})

/**
 * @description get lead partner details
 */
 router.get('/lead_partner/:id', (req, res, next) => {
    objLead.getLeadPartner(req.params.id).then(result => {
        res.status(200).send({ message: result.message, status: 1, data: result.data, status_code: 200 });
    }).catch(err => {
        res.status(err.httpStatus || 500).send({ message: err.message, status: 0, status_code: err.httpStatus || 500 });
    });
})

/**
 * @description get lead partner details
 */
 router.get('/lead_bank/:id', (req, res, next) => {
    objLead.getLeadBank(req.params.id).then(result => {
        res.status(200).send({ message: result.message, status: 1, data: result.data, status_code: 200 });
    }).catch(err => {
        res.status(err.httpStatus || 500).send({ message: err.message, status: 0, status_code: err.httpStatus || 500 });
    });
})

/**
 * @description get lead partner details
 */
 router.get('/lead_business/:id', (req, res, next) => {
    objLead.getLeadBussiness(req.params.id).then(result => {
        res.status(200).send({ message: result.message, status: 1, data: result.data, status_code: 200 });
    }).catch(err => {
        res.status(err.httpStatus || 500).send({ message: err.message, status: 0, status_code: err.httpStatus || 500 });
    });
})

/**
 * @description create lead officer router
 */
router.post('/create_lead_officer', (req, res, next) => {
    objLead.createLeadOfficer(req.body).then(result => {
        res.status(200).send({ message: result.message, status: 1, data: result.data, status_code: 200 });
    }).catch(err => {
        res.status(err.httpStatus || 500).send({ message: err.message, status: 0, status_code: err.httpStatus || 500 });
    });
})

/**
 * @description create lead partner router
 */
router.post('/create_lead_partner', (req, res, next) => {
    objLead.createLeadPartner(req.body).then(result => {
        res.status(200).send({ message: result.message, status: 1, data: result.data, status_code: 200 });
    }).catch(err => {
        res.status(err.httpStatus || 500).send({ message: err.message, status: 0, status_code: err.httpStatus || 500 });
    });
})

/**
 * @description create lead bussiness router
 */
router.post('/create_lead_bussiness', (req, res, next) => {
    objLead.createLeadBussinessProp(req.body).then(result => {
        res.status(200).send({ message: result.message, status: 1, data: result.data, status_code: 200 });
    }).catch(err => {
        res.status(err.httpStatus || 500).send({ message: err.message, status: 0, status_code: err.httpStatus || 500 });
    });
})

/**
 * @description create lead bank router
 */
router.post('/create_lead_bank_info', (req, res, next) => {
    objLead.createLeadBankInfo(req.body).then(result => {
        res.status(200).send({ message: result.message, status: 1, data: result.data, status_code: 200 });
    }).catch(err => {
        res.status(err.httpStatus || 500).send({ message: err.message, status: 0, status_code: err.httpStatus || 500 });
    });
})

/**
 * @description create lead 
 */
router.post('/cread_lead', (req, res, next) => {
    objLead.createLead(req.body).then(result => {
        res.status(200).send({ message: result.message, status: 1, data: result.data, status_code: 200 });
    }).catch(err => {
        res.status(err.httpStatus || 500).send({ message: err.message, status: 0, status_code: err.httpStatus || 500 });
    });
})

/**
 * @description get lead updates list
 */
 router.get('/updates/:id', (req, res, next) => {
    objLead.leadLogs(req.params.id, req.query).then(result => {
        res.status(200).send({ message: result.message, status: 1, data: result.data, status_code: 200 });
    }).catch(err => {
        console.log(err);
        res.status(err.httpStatus || 500).send({ message: err.message, status: 0, status_code: err.httpStatus || 500 });
        
    });
})

/**
 * @description create lead activity
 */
 router.post('/create_activity', (req, res, next) => {
    objLead.addLeadEvent(req.body).then(result => {
        res.status(200).send({ message: result.message, status: 1, data: result.data, status_code: 200 });
    }).catch(err => {
        res.status(err.httpStatus || 500).send({ message: err.message, status: 0, status_code: err.httpStatus || 500 });
    });
})

/**
 * @description create lead note
 */
 router.post('/create_note', (req, res, next) => {
    objLead.addLeadNotes(req.body).then(result => {
        res.status(200).send({ message: result.message, status: 1, data: result.data, status_code: 200 });
    }).catch(err => {
        res.status(err.httpStatus || 500).send({ message: err.message, status: 0, status_code: err.httpStatus || 500 });
    });
})

/**
 * @description create lead log
 */
 router.post('/create_lead_log', (req, res, next) => {
    objLead.addLeadLog(req.body).then(result => {
        res.status(200).send({ message: result.message, status: 1, data: result.data, status_code: 200 });
    }).catch(err => {
        res.status(err.httpStatus || 500).send({ message: err.message, status: 0, status_code: err.httpStatus || 500 });
    });
})

/**
 * @description get lead activities list
 */
 router.get('/activities_list/:id', (req, res, next) => {
    objLead.getLeadActivitiesList(req.params.id, req.query).then(result => {
        res.status(200).send({ message: result.message, status: 1, data: result.data, status_code: 200 });
    }).catch(err => {
        res.status(err.httpStatus || 500).send({ message: err.message, status: 0, status_code: err.httpStatus || 500 });
    });
})

/**
 * @description get notes list
 */
 router.get('/notes_list/:id', (req, res, next) => {
    objLead.getNoteslist(req.params.id).then(result => {
        res.status(200).send({ message: result.message, status: 1, data: result.data, status_code: 200 });
    }).catch(err => {
        res.status(err.httpStatus || 500).send({ message: err.message, status: 0, status_code: err.httpStatus || 500 });
    });
})

/**
 * @description get notes list
 */
 router.post('/create_api_response', (req, res, next) => {
    objLead.addLeadApiResponse(req.body).then(result => {
        res.status(200).send({ message: result.message, status: 1, data: result.data, status_code: 200 });
    }).catch(err => {
        res.status(err.httpStatus || 500).send({ message: err.message, status: 0, status_code: err.httpStatus || 500 });
    });
})

/**
 * @description get notes list
 */
 router.get('/get_api_responses/:id', (req, res, next) => {
    objLead.getLeadAPIResponses(req.params.id).then(result => {
        res.status(200).send({ message: result.message, status: 1, data: result.data, status_code: 200 });
    }).catch(err => {
        res.status(err.httpStatus || 500).send({ message: err.message, status: 0, status_code: err.httpStatus || 500 });
    });
})


//router added by Gaurav basra 21 jun 2022


/**
 * @description create email log
 */

router.post('/create_email_log',(req,res)=>{
    objLead.addEmailLogs(req.body).then(result=>{
        res.status(200).send({message:result.message,status:1,data:result.data,status_code:200});
    }).catch(err=>{
        res.status(err.httpStatus || 500).send({ message: err.message, status: 0, status_code: err.httpStatus || 500 });
    })
})

/**
 * @description get email data
 */
router.post('/get_email_logs',(req,res)=>{
    objLead.getEmailList(req.body).then(result=>{
        res.status(200).send({message:result.message,status:1,data:result.data,status_code:200});
    }).catch(err=>{
        res.status(err.httpStatus || 500).send({ message: err.message, status: 0, status_code: err.httpStatus || 500 });
    })
})

/**
 * @description send mail and create Logs
 * 
 */

router.post('/sendMail',(req,res)=>{
    objLead.sendEmail(req.body).then(result=>{
        res.status(200).send({message:result.message,status:1,data:result.data,status_code:200});
    }).catch(err=>{
        res.status(err.httpStatus || 500).send({ message: err.message, status: 0, status_code: err.httpStatus || 500 });
    })
})

/**
 * @description send mail by company through sendgrid cred
 * @params : from , api_key
 */

router.post('/mailSendWithDynamicCred',(req,res)=>{
    objLead.mailSendWithDynamicCred(req.body).then(result=>{
        res.status(200).send({message:result.message,status:1,data:result.data,status_code:200});
    }).catch(err=>{
        res.status(err.httpStatus || 500).send({ message: err.message, status: 0, status_code: err.httpStatus || 500 });
    })
})


/**
 * @description read Email Api 
 */

router.post('/readEmail',(req,res)=>{
    objLead.readSentMail(req.body).then(result=>{
        res.status(200).send({message:result.message,status:1,data:result.data,status_code:200});
    }).catch(err=>{
        res.status(err.httpStatus || 500).send({ message: err.message, status: 0, status_code: err.httpStatus || 500 });
    })
})




module.exports = router;