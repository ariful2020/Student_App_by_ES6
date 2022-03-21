class Storage {

    /**
     * data Check
     * @param {*} key 
     * @returns 
     */
static has(key){

return localStorage.getItem(key) ? localStorage.getItem(key) : false;

    }
/**
 * data get from ls storage
 */
static get(key){

if(this.has(key)){
    return JSON.parse(this.has(key));
}else{
    return "No Data Found"
}


}

/**
 * Data Set LS storage
 * @param {*} key 
 * @param {*} data 
 */
static set(key, data){

let dataSet = [];

  if(this.has( key )){ 
      
      dataSet = JSON.parse(this.has( key ))

  }
  dataSet.push(data)

    localStorage.setItem(key, JSON.stringify(dataSet))
  
}


}
export default Storage;