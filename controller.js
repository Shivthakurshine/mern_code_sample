'use strict';

require("./model");
const mongoose = require('mongoose'); //orm for database
const leadOfficers = mongoose.model('lead_officers'); //model for lead officers
const leadPartner = mongoose.model('lead_partners'); //model for lead partner
const leadBussiness = mongoose.model('lead_business_properties'); //model for lead bussiness prtaner
const leadBank = mongoose.model('lead_bank_details'); //model for lead bank info
const leadActivities = mongoose.model('lead_activities'); //model for lead bank info

const createLeadLog = require('../../../helper/lead_logs');
const leadLogs = mongoose.model('lead_logs');
const leadNotes = mongoose.model('lead_notes');
const leadApiResponses = mongoose.model('lead_api_responses');

//email model
const emailLogs = mongoose.model('email_logs_data');

//nodeMail file
const mailFunction = require('../../../helper/nodeMail');

const {companyModel} = require('../company/model');

class Lead {

    async addLeadApiResponse(data) {
        try {
            if (!data.lead_id) {
                return Promise.reject({ message: "Please provide lead id", httpStatus: 400 });
            }
            let reqData = {
                ...data,
                raw_data: {
                    user_agent: data.user_agent,
                    url: data.url,
                    ip: data.ip
                }
            }
            let res = await leadApiResponses.create(reqData);
            return Promise.resolve({ message: "success", data: {}, status: 1 });
        } catch (error) {
            return Promise.reject({ message: error.message, httpStatus: 400 });
        }
    }

    async getLeadAPIResponses(lead_id) {
        try {
            if (!lead_id) {
                return Promise.reject({ message: "Please provide lead id", httpStatus: 400 });
            }
            let leadsData = await leadApiResponses.find({ lead_id: lead_id });
            return Promise.resolve({ message: "success", data: leadsData, status: 1 });
        } catch (error) {
            return Promise.reject({ message: error.message, httpStatus: 400 });
        }
    }

    async getLeadOfficer(leadID) {
        try {
            if (!leadID) {
                return Promise.reject({ message: "Please provide lead id", httpStatus: 400 });
            }
            const leadOfficer = await leadOfficers.findOne({ lead_id: leadID }, { "__v": 0, "_id": 0, "lead_id": 0 });
            if(leadOfficer) {
                return Promise.resolve({ message: "success", data: leadOfficer, status: 1 });
            }
            return Promise.reject({ message: "Lead data not found", data: {}, status: 0, httpStatus: 400 });
        } catch (error) {
            return Promise.reject({ message: error.message, httpStatus: 400 });
        }
    }

    async getLeadPartner(leadID) {
        try {
            if (!leadID) {
                return Promise.reject({ message: "Please provide lead id", httpStatus: 400 });
            }
            const leadpartner = await leadPartner.findOne({ lead_id: leadID }, { "__v": 0, "_id": 0, "lead_id": 0 });
            if(leadpartner) {
                return Promise.resolve({ message: "success", data: leadpartner, status: 1 });
            }
            return Promise.reject({ message: "Lead data not found", data: {}, status: 0, httpStatus: 400 });
        } catch (error) {
            return Promise.reject({ message: error.message, httpStatus: 400 });
        }
    }

    async getLeadBussiness(leadID) {
        try {
            if (!leadID) {
                return Promise.reject({ message: "Please provide lead id", httpStatus: 400 });
            }
            const leadBuss = await leadBussiness.findOne({ lead_id: leadID }, { "__v": 0, "_id": 0, "lead_id": 0 });
            if(leadBuss) {
                return Promise.resolve({ message: "success", data: leadBuss, status: 1 });
            }
            return Promise.reject({ message: "Lead data not found", data: {}, status: 0, httpStatus: 400 });
        } catch (error) {
            return Promise.reject({ message: error.message, httpStatus: 400 });
        }
    }

    async getLeadBank(leadID) {
        try {
            if (!leadID) {
                return Promise.reject({ message: "Please provide lead id", httpStatus: 400 });
            }
            const leadbank = await leadBank.findOne({ lead_id: leadID }, { "__v": 0, "_id": 0, "lead_id": 0 });
            if(leadbank) {
                return Promise.resolve({ message: "success", data: leadbank, status: 1 });
            }
            return Promise.reject({ message: "Lead data not found", data: {}, status: 0, httpStatus: 400 });
        } catch (error) {
            return Promise.reject({ message: error.message, httpStatus: 400 });
        }
    }

   

    /**
     * @description add lead officer 
     */
    async createLeadOfficer(reqBody, addLeadLog) {
        try {
            let response = await leadOfficers.updateOne({ lead_id: reqBody.lead_id }, reqBody, { upsert: true });
            // if (addLeadLog) {
            //     createLeadLog(reqBody.user_id, reqBody.lead_id, leadActions.LeadOfficerAdded, '', '', { user_agent: reqBody.user_agent, url: reqBody.url, ip: reqBody.ip }, 1);
            // }

            return Promise.resolve({ message: "success", data: {} });
        } catch (error) {
            return Promise.reject({ message: error.message, httpStatus: 400 })
        }
    }

    /**
     * @description create lead logs
     * @param {*} reqBody 
     * @returns 
     */
    addLeadLog(reqBody) {
        try {
            createLeadLog(reqBody.user_id, reqBody.lead_id, reqBody.action, '', '', { user_agent: reqBody.user_agent, url: reqBody.url, ip: reqBody.ip }, 1);
            return Promise.resolve({ message: "success", data: {} });
        } catch (error) {
            return Promise.reject({ message: error.message, httpStatus: 400 })
        }
    }

    /**
     * @description add lead officer 
     */
    async createLeadPartner(reqBody) {
        try {
            let response = await leadPartner.updateOne({ lead_id: reqBody.lead_id }, reqBody, { upsert: true });
            return Promise.resolve({ message: "success", data: {} });
        } catch (error) {
            return Promise.reject({ message: error.message, httpStatus: 400 })
        }
    }

    /**
    * @description add lead officer 
    */
    async createLeadBussinessProp(reqBody) {
        try {
            let response = await leadBussiness.updateOne({ lead_id: reqBody.lead_id }, reqBody, { upsert: true });
            return Promise.resolve({ message: "success", data: {} });
        } catch (error) {
            return Promise.reject({ message: error.message, httpStatus: 400 })
        }
    }

    /**
    * @description add lead officer 
    */
    async createLeadBankInfo(reqBody) {
        try {
            let response = await leadBank.updateOne({ lead_id: reqBody.lead_id }, reqBody, { upsert: true });
            return Promise.resolve({ message: "success", data: {} });
        } catch (error) {
            return Promise.reject({ message: error.message, httpStatus: 400 })
        }
    }

    /**
    * @description add lead officer 
    */
    async createLead(reqBody) {
        try {
            let leadOfficer = await this.createLeadOfficer({ ...reqBody.lead_officer, lead_id: reqBody.lead_id });
            let leadpartner = await this.createLeadPartner({ ...reqBody.lead_partner, lead_id: reqBody.lead_id });
            let leadBussines = await this.createLeadBussinessProp({ ...reqBody.lead_bussiness, lead_id: reqBody.lead_id }, false);
            let leadBank = await this.createLeadBankInfo({ ...reqBody.lead_bank, lead_id: reqBody.lead_id });
            return Promise.resolve({ message: "success", data: {} });
        } catch (error) {
            return Promise.reject({ message: error.message, httpStatus: 400 })
        }
    }

    /**
     * @description updates list with search and pagination
     * @param {*} leadId 
     * @param {*} filters 
     * @returns { Promise<any> }
     */
    async leadLogs(leadId, filters) {
        try {
            if (!leadId || !filters.page) {
                return Promise.reject({ message: "Please provide lead id & page number", httpStatus: 400 })
            }
            filters.page = parseInt(filters.page);
            let query = { lead_id: leadId };
            if (filters.search) {
                query.action_type = { $regex: filters.search.trim(), $options: 'i' }
            }
            if(filters.dateRange) {
                let date = filters.dateRange.split(' / ');
                let date1 = new Date(date[0]);
                let date2 = new Date(date[1]);
                date2.setHours(23,59,59,999);
                query.created_at = { $gte: date1, $lt: date2 }
            }
            let logs = await leadLogs.aggregate(
                [
                    {
                        $facet: {
                            count: [
                                { $match: query },
                                {
                                    $count: "count"
                                }
                            ],
                            records: [
                                { $match: query },
                                { $sort: { created_at: -1 } },
                                { $skip: global.pagination_limit * (filters.page - 1) },
                                { $limit: global.pagination_limit },
                                {
                                    $project: {
                                        "_id": "$_id",
                                        "user_id": "$user_id",
                                        "note": "$action_type",
                                        "created_at": "$created_at"
                                    }
                                }
                            ]
                        }
                    },
                ]
            );
            if (logs && logs.length) {
                let data = logs[0];
                let total = 0;
                if (data.count && data.count.length) {
                    total = data.count[0].count;
                }
                return Promise.resolve({ message: "success", data: {logs: data.records, total: total} });
            }
            return Promise.resolve({ message: "success", data: [], total: 0 });
        } catch (error) {
            return Promise.reject({ message: error.message, httpStatus: 400 })
        }
    }

    /**
     * @description add list event
     * @param {*} activityData 
     * @returns { Promise<any> }
     */
    async addLeadEvent(activityData) {
        try {
            if(!activityData.lead_id) return Promise.reject({ message: "Please provide lead id", httpStatus: 400 });
            let data = await leadActivities.create(activityData);
            return Promise.resolve({ message: "success", data: {} });
        } catch (error) {
            return Promise.reject({ message: error.message, httpStatus: 400 })
        }
    }

    /**
     * @description get activities list
     * @param {*} leadId 
     * @param {*} filters 
     * @returns 
     */
    async getLeadActivitiesList(leadId, filters) {
        try {
            if (!leadId || !filters.page) {
                return Promise.reject({ message: "Please provide lead id & page number", httpStatus: 400 })
            }
            filters.page = parseInt(filters.page);
            let query = { lead_id: leadId };
            if (filters.search) {
                query['$or'] = [
                    { subject : { $regex: filters.search.trim(), $options: 'i' } },
                    { event_type : { $regex: filters.search.trim(), $options: 'i' } },
                    { activity_type : { $regex: filters.search.trim(), $options: 'i' } },
                ]
            }
            if(filters.dateRange) {
                let date = filters.dateRange.split(' / ');
                let date1 = new Date(date[0]);
                let date2 = new Date(date[1]);
                date2.setHours(23,59,59,999);
                query.created_at = { $gte: date1, $lt: date2 }
            }
            let activities = await leadActivities.aggregate(
                [
                    {
                        $facet: {
                            count: [
                                { $match: query },
                                {
                                    $count: "count"
                                }
                            ],
                            records: [
                                { $match: query },
                                { $sort: { created_at: -1 } },
                                { $skip: global.pagination_limit * (filters.page - 1) },
                                { $limit: global.pagination_limit }
                            ]
                        }
                    },
                ]
            );
            if (activities && activities.length) {
                let data = activities[0];
                let total = 0;
                if (data.count && data.count.length) {
                    total = data.count[0].count;
                }
                return Promise.resolve({ message: "success", data: {activities: data.records, total: total}});
                
            }
            return Promise.resolve({ message: "success", data: [], total: 0 });
        } catch (error) {
            return Promise.reject({ message: error.message, httpStatus: 400 })
        }
    }

    /**
     * @description add lead notes
     * @param {*} notesData 
     * @returns 
     */
    async addLeadNotes(notesData) {
        try {
            if(!notesData.lead_id) return Promise.reject({ message: "Please provide lead id", httpStatus: 400 });
            let data = await leadNotes.create(notesData);
            return Promise.resolve({ message: "success", data: {} });
        } catch (error) {
            return Promise.reject({ message: error.message, httpStatus: 400 })
        }
    }

    /**
     * @description get notes list
     * @param {*} leadId 
     * @returns 
     */
    async getNoteslist(leadId) {companyId
        try {
            if(!leadId) return Promise.reject({ message: "Please provide lead id", httpStatus: 400 });
            let notesList = await leadNotes.find({ lead_id: leadId });
            return Promise.resolve({ message: "success", data: notesList });
        } catch (error) {
            return Promise.reject({ message: error.message, httpStatus: 400 })
        }
    }

    /**
     * @description add emails logs
     * @params company_id subject templete_name
     */
    async addEmailLogs(logData){
        try{
            let storeEmailData = await emailLogs.create(logData);
            return Promise.resolve({message:"success",data:storeEmailData});
        }
        catch(err){
            return Promise.reject({message:err.message,httpStatus:400});
        }
    }

    /**
     * @description get Email list
     * @param {company_id or lead_id or subject or templete_name or daterange_filter or filters or email} data 
     * @returns 
     */

    async getEmailList(data){
        try{
            let searchObj = {};
            // if(data.company_id) searchObj.company_id = data.company_id;
            if(data.lead_id) searchObj.lead_id = data.lead_id;
            if(data.superior_id) searchObj.superior_id = data.superior_id;
            if(data.email) searchObj.to = {"$regex":data.email,$options:'i'};
            if(data.subject) searchObj.subject = {"$regex":data.subject,$options:'i'}
            if(data.templete_name) searchObj.templete_name = {"$regex":data.templete_name,$options:'i'}
            if(data.daterange_filter){
                let [fromDate,endDate] = data.daterange_filter.split(" / ");
                
                fromDate = new Date(fromDate);
                endDate = new Date(endDate);

                fromDate.setHours(0,0,0,0);
                endDate.setHours(23,59,59,999);

                if(fromDate && endDate){
                    searchObj["$and"] = [{created_at:{$gte:fromDate}},{created_at:{$lte:endDate}}];
                }
                else{
                    return Promise.reject({message:"Please provide daterange filter in the format of YYYY-MM-DD/YYYY-MM-DD "})
                }
            }
            let page = Number(data.filters.page)|| 1;
            let limit = Number(data.filters.page_limit)||global.pagination_limit;


            let emailList = await emailLogs.aggregate([
                {
                    $facet:{
                        count:[
                            {$match:searchObj},
                            {$count:"count"}
                        ],
                        records:[
                            {$match:searchObj},
                            {$sort:{created_at:-1}},
                            {$skip:limit*(page-1)},
                            {$limit:limit}
                        ]

                    }
                }

            ])

            if(emailList && emailList[0].records.length){
               return Promise.resolve({ message: "success", data: {emailLogs:emailList[0].records,total:emailList[0].count[0].count} });
            }
            return Promise.resolve({ message: "success", data: {emailLogs:[],total:0} });
        }
        catch(err)
        {
            return Promise.reject({message:err.message,httpStatus:400});
        }
    }

    /**
     * @description send mail 
     * 
     */
    async sendEmail(data){
        try{
            console.log("data.length=>",data.length);
            if(data && data.length<=0) return Promise.reject({message:"Please provide some data"})
            mailFunction.sendMyEmail(data,emailLogs);
            // data.status = 1;
            // let logData = await this.addEmailLogs(data);
            return  Promise.resolve({message:"Mail sent successfully",data:{}})
        }
        catch(err){
            
            return Promise.reject({message:err.message,httpStatus:400});
        }
    }

    async readSentMail(data){
        try{
            if(!data) return Promise.reject({message:"Please provide some data",httpStatus: 400});
            if(!data.token) return Promise.reject({message:"Please provide token",httpStatus: 400});
            await emailLogs.findOneAndUpdate({token:data.token},{is_read:1},{new:true});
            return Promise.resolve({message:"success",data:{}});

        }
        catch(err){
            return Promise.reject({message:err.message,httpStatus:400});
        }
    }

    async mailSendWithDynamicCred(data){
        try{

            if(!Array.isArray(data)) return Promise.reject({httpStatus:400,message:"Please provide array of objects"});

            let companyId = data[0].companyId;
            if(!companyId) return Promise.reject({httpStatus:400,message:"Please provide company Id"});
            

            let companyCredData = await companyModel.findOne({companyId:companyId}).lean();
            if(companyCredData==null || companyCredData=="") return Promise.reject({httpStatus:400,message:"No company details found"});
            
            if(!companyCredData.fromName) return Promise.reject({httpStatus:400,message:"No 'fromName' found in your company SMTP crediantials"});
            if(!companyCredData.service) return Promise.reject({httpStatus:400,message:"No 'service' foudn in your company SMTP"});


            // if(!data.to) return Promise.reject({httpStatus:400,message:"Please provide to"});
            // if(!data.subject) return Promise.reject({httpStatus:400,message:"Please provide subject"});
            // if(!data.html) return Promise.reject({httpStatus:400,message:"Please provide html"});

            
            if(companyCredData.service==='gmail'){
                if(!companyCredData.user) return Promise.reject({httptatus:400,message:"No 'user' found in your compnay SMTP crediantials "});
                if(!companyCredData.password) return Promise.reject({httpStatus:400,message:"No 'password' found in your compnay SMTP crediantials"})
            }
            else if(companyCredData.service==='SendGrid'){
                if(!companyCredData.apiKey) return Promise.reject({httpStatus:400,message:"No 'apiKey' found in your compnay SMTP crediantials"});
                if(!companyCredData.from) return Promise.reject({httpStatus:400,message:"No 'fromEmail' found in your compnay SMTP crediantials"});
            }
            else{
                return Promise.reject({httpStatus:400,message:"Please provide the correct data"});
            }

            let mailData = mailFunction.sendMyEmailByDynamicCred(data,emailLogs,companyCredData);
            return  Promise.resolve({message:"Operation successfully",data:{}})

        }
        catch(err){
            return Promise.reject({message:err,httpStatus:400});
        }
    }

}

module.exports = Lead;