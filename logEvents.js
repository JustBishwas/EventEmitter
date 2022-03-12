const {format} = require('date-fns');
const {v4:uuid} = require('uuid');

//common core modules

const fs = require('fs');
const fspromises = require('fs').promises ;
const path = require('path');

const logEvents = async (message) =>{
    const dateTime = `${format(new Date(),'yyyymmdd\tHH:mm:ss')}`;
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
    console.log(logItem);
    try{
        if(!fs.existsSync(path.join(__dirname,'logs'))){
            await fspromises.mkdir(path.join(__dirname,'logs'));
        }
        await fspromises.appendFile(path.join(__dirname, 'logs' ,'eventlog.txt'), logItem);
    }
    catch(err){
        console.log(err);
    }
}

// console.log(format(new Date(),'yyyymmdd\tHH:mm:ss'));
// console.log(uuid());

module.exports = logEvents;
