
import Ember from 'ember';
import layout from "firmbench/templates/components/use-firmbench";


export default Ember.Component.extend({
  layout,
  isCharts:false,
  firmBenchModal: false,
  firmType: "",
  firmSizevalue : "",
  firmSpecializationValue:"",
  firmBenchNet:"",
  firmBenchProfit:"",
  firmBenchRepeat:"",
  firmSize:[
        {
          "size": {
            "key": 1,
            "value": 13.9
          }
        },
        {
          "size": {
            "key": "2-4",
            "value": 15.9
          }
        },
        {
          "size": {
            "key": "5-9",
            "value": 10.9
          }
        },
        {
          "size": {
            "key": "10-19",
            "value": 11.9
          }
        },
        {
          "size": {
            "key": "20-49",
            "value": 16.9
          }
        },
        {
          "size": {
            "key": "50-99",
            "value": 18.9
          }
        },
        {
          "size": {
            "key": "100+",
            "value": 12.9
          }
        }
      ],
  firmSpecialization:[
        {
          "specialization": {
            "key": "Residential",
            "value": 13.9
          }
        },
        {
          "specialization": {
            "key": "Commercial/Industrial",
            "value": 13.2
          }
        },
        {
          "specialization": {
            "key": "Institutional",
            "value": 12.9
          }
        },
        {
          "specialization": {
            "key": "Mixed",
            "value": 14.6
          }
        }
      ],
  firmTypeObserver: Ember.observer('firmType', function() {
    //let firmType = this.get("firmType");
    //let modalData = this.get("ModalData");
    //let firmSize = modalData[firmType]["firm_size"];
    //let firmSpecialization = modalData[firmType]["Firm_Specialization"];
    //this.set("firmSize", firmSize);
    //this.set("firmSpecialization", firmSpecialization);
  }),
  donutData: [],
stackedData : [  
],

ModalData: {
    "Profitability": {
      "name" : "Profitability" ,
      "nation_average": 13.4,
      "firm_size": [
        {
          "size": {
            "key": 1,
            "value": 13.9
          }
        },
        {
          "size": {
            "key": "2-4",
            "value": 15.9
          }
        },
        {
          "size": {
            "key": "5-9",
            "value": 10.9
          }
        },
        {
          "size": {
            "key": "10-19",
            "value": 11.9
          }
        },
        {
          "size": {
            "key": "20-49",
            "value": 16.9
          }
        },
        {
          "size": {
            "key": "50-99",
            "value": 18.9
          }
        },
        {
          "size": {
            "key": "100+",
            "value": 12.9
          }
        }
      ],
      "Firm_Specialization": [
        {
          "specialization": {
            "key": "Residential",
            "value": 13.9
          }
        },
        {
          "specialization": {
            "key": "Commercial/Industrial",
            "value": 13.2
          }
        },
        {
          "specialization": {
            "key": "Institutional",
            "value": 12.9
          }
        },
        {
          "specialization": {
            "key": "Mixed",
            "value": 14.6
          }
        }
      ]
    },
    "repeat_clients": {
      "name" : "Repeat Clients" ,
      "nation_average": 56,
      "firm_size": [
        {
          "size": {
            "key": 1,
            "value": 65
          }
        },
        {
          "size": {
            "key": "2-4",
            "value": 63
          }
        },
        {
          "size": {
            "key": "5-9",
            "value": 70
          }
        },
        {
          "size": {
            "key": "10-19",
            "value": 74
          }
        },
        {
          "size": {
            "key": "20-49",
            "value": 70
          }
        },
        {
          "size": {
            "key": "50-99",
            "value": 80
          }
        },
        {
          "size": {
            "key": "100+",
            "value": 60
          }
        }
      ],
      "Firm_Specialization": [
        {
          "specialization": {
            "key": "Residential",
            "value": 78
          }
        },
        {
          "specialization": {
            "key": "Commercial/Industrial",
            "value": 73
          }
        },
        {
          "specialization": {
            "key": "Institutional",
            "value": 71
          }
        },
        {
          "specialization": {
            "key": "Mixed",
            "value": 0
          }
        }
      ]
    },
    "Net_revenue": {
      "nation_average": 108000,
      "name" : "Net Revenue",
      "firm_size": [
        {
          "size": {
            "key": 1,
            "value": 102000
          }
        },
        {
          "size": {
            "key": "2-4",
            "value": 92000
          }
        },
        {
          "size": {
            "key": "5-9",
            "value": 108000
          }
        },
        {
          "size": {
            "key": "10-19",
            "value": 128000
          }
        },
        {
          "size": {
            "key": "20-49",
            "value": 140000
          }
        },
        {
          "size": {
            "key": "50-99",
            "value": 161000
          }
        },
        {
          "size": {
            "key": "100+",
            "value": 161000
          }
        }
      ],
      "Firm_Specialization": [
        {
          "specialization": {
            "key": "Residential",
            "value": 102000
          }
        },
        {
          "specialization": {
            "key": "Commercial/Industrial",
            "value": 111000
          }
        },
        {
          "specialization": {
            "key": "Institutional",
            "value": 120000
          }
        },
        {
          "specialization": {
            "key": "Mixed",
            "value": 98000
          }
        }
      ]
    }
  },
  init: function(){
    this._super(...arguments);
  },
 actions :{
   
   showFirmBenchModal: function(status) {
     this.set('firmBenchModal', status);
   },
   backToHomeScreen: function() {
     this.set('isCharts', false);
   },
   submitfirmBench : function(){
    let sizeValue = this.get("firmSizevalue");
    let specializationValue = this.get("firmSpecializationValue");
    let firmType = this.get("firmType");
    let firmBenchNet = this.get("firmBenchNet");
    let firmBenchProfit = this.get("firmBenchProfit");
    let firmBenchRepeat = this.get("firmBenchRepeat");
    if((firmBenchNet !== "" || firmBenchProfit !== "" || firmBenchRepeat !=="" ) && (sizeValue !=="" && specializationValue !== "")){
       let firmBenchNetValue = parseInt(firmBenchNet);
      let  firmBenchProfitValue = parseInt(firmBenchProfit);
       let firmBenchRepeatValue = parseInt(firmBenchRepeat);
        let modalData = this.get("ModalData");
        let nationalAvg = 0;
        //let specializationKey = modalData[firmType]["Firm_Specialization"];
        //let res = _.filter(specializationKey, data => {return data.specialization.value === specializationValue; });
        //let specializationType= res[0].specialization.key;
        
        
        let ChartData1 = [];
        let ChartData2 = [];
        let ChartData3 = [];
        if(firmBenchNetValue){
          
          let firmSizeValue = modalData["Net_revenue"];
          let res = _.filter(firmSizeValue["firm_size"], data => {return data.size.key === sizeValue; });
          let NRsizeValue= res[0].size.value;
          
          let spRes = _.filter(firmSizeValue["Firm_Specialization"], data => {return data.specialization.key === specializationValue; });
          let NRSpecializationValue= spRes[0].specialization.value;
          
          nationalAvg = firmSizeValue.nation_average;
        ChartData1.push({"label":"You","value":firmBenchNetValue,"color":"#177E89"});
         ChartData1.push({"label":"NationalAvg","value":nationalAvg,"color":"#084C61"}); 
        ChartData1.push({"label":"Firm your Size","value":NRsizeValue,"color":"#FFC857"}); 
        ChartData1.push({"label":"specialization","value":NRSpecializationValue,"color":"#FA4132"}); 
     
        } 
         if(firmBenchProfitValue){
           let firmSizeValue = modalData["Profitability"];
          let res = _.filter(firmSizeValue["firm_size"], data => {return data.size.key === sizeValue; });
          let PrfsizeValue= res[0].size.value;
          
          let spRes = _.filter(firmSizeValue["Firm_Specialization"], data => {return data.specialization.key === specializationValue; });
          let spSpecializationValue= spRes[0].specialization.value;
          
          nationalAvg = firmSizeValue.nation_average;
          ChartData2.push({"label":"You","value":firmBenchProfitValue,"color":"#177E89"});
           ChartData2.push({"label":"NationalAvg","value":nationalAvg,"color":"#084C61"}); 
        ChartData2.push({"label":"Firm your Size","value":PrfsizeValue,"color":"#FFC857"}); 
        ChartData2.push({"label":"specialization","value":spSpecializationValue,"color":"#FA4132"}); 
           console.log("Profit"+firmBenchProfitValue)
         }
       if(firmBenchRepeatValue){
         let firmSizeValue = modalData["repeat_clients"];
          let res = _.filter(firmSizeValue["firm_size"], data => {return data.size.key === sizeValue; });
          let NAsizeValue= res[0].size.value;
          
          let spRes = _.filter(firmSizeValue["Firm_Specialization"], data => {return data.specialization.key === specializationValue; });
          let NASpecializationValue= spRes[0].specialization.value;
          
          nationalAvg = firmSizeValue.nation_average;
          ChartData3.push({"label":"You","value":firmBenchRepeatValue,"color":"#177E89"});
           ChartData3.push({"label":"NationalAvg","value":nationalAvg,"color":"#084C61"}); 
        ChartData3.push({"label":"Firm your Size","value":NAsizeValue,"color":"#FFC857"}); 
        ChartData3.push({"label":"specialization","value":NASpecializationValue,"color":"#FA4132"}); 
           console.log("Profit"+firmBenchRepeatValue) 
       }
         this.set("ChartData1",ChartData1);
         this.set("ChartData2",ChartData2);
         this.set("ChartData3",ChartData3);
         this.set('firmBenchModal', false); 
         this.set('isCharts',true);
    } else {
       alert("enter your own data to seehow you compare");
    } 
    
    
   },
   
 } 
});