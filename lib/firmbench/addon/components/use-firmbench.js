
import Ember from 'ember';
import layout from "firmbench/templates/components/use-firmbench";


export default Ember.Component.extend({
  layout,
  isCharts:false,
  firmBenchModal: false,
  firmType: "",
  firmSizevalue : "",
  firmSpecializationValue:"",
  firmBench:"",
  firmSize:{},
  firmSpecialization:{},
  firmTypeObserver: Ember.observer('firmType', function() {
    let firmType = this.get("firmType");
    let modalData = this.get("ModalData");
    let firmSize = modalData[firmType]["firm_size"];
    let firmSpecialization = modalData[firmType]["Firm_Specialization"];
    this.set("firmSize", firmSize);
    this.set("firmSpecialization", firmSpecialization);
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
   submitfirmBench : function(){
    let sizeValue = this.get("firmSizevalue");
    let specializationValue = this.get("firmSpecializationValue");
    let firmType = this.get("firmType");
    let firmBenchValue = this.get("firmBench");
    if(sizeValue !== "" && specializationValue !== "" && firmType !== "" && firmBenchValue !== "" ){
        firmBenchValue = parseInt(firmBenchValue);
        let modalData = this.get("ModalData");
        let nationalAvg = modalData[firmType]["nation_average"];
        let specializationKey = modalData[firmType]["Firm_Specialization"];
        let res = _.filter(specializationKey, data => {return data.specialization.value === specializationValue; });
        let specializationType= res[0].specialization.key;
        let donutData = [];
        donutData.push({"label":"You","value":firmBenchValue,"color":"#177E89"}); 
        donutData.push({"label":"NationalAvg","value":nationalAvg,"color":"#084C61"}); 
        donutData.push({"label":"Firm your Size","value":sizeValue,"color":"#FFC857"}); 
        donutData.push({"label":specializationType,"value":specializationValue,"color":"#FA4132"}); 
         this.set("donutData",donutData);
         this.set('firmBenchModal', false); 
         this.set('isCharts',true);
    } else {
       alert("enter your own data to seehow you compare");
    } 
    
    
   },
   
 } 
});