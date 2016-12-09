import Ember from 'ember';
import layout from "firmbench/templates/components/use-firmbench";
import {ValidationMixin, validate} from "ember-cli-simple-validation/mixins/validate";
import numeral from 'numeral';

export default Ember.Component.extend(ValidationMixin, {
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
      ]    }
  },
  init: function(){
    this._super(...arguments);
  },
  
  nameValidation: validate("firmName"),
  emailValidation: validate("email", /\S+@\S+\.\S+/),
  firmSizeValidation: validate("firmSizevalue",function(){
    let firmSize = this.get("firmSizevalue");
    if(!firmSize){
      return true;
    }
    return (firmSize >= 1 && firmSize <= 100000);
  }),
  firmBenchProfitValidation: validate("firmBenchProfit",function(){
    let number = this.get("firmBenchProfit");
    return (number >= -100 && number <= 100);
  }),
  firmBenchNetValidation: validate("firmBenchNet",function(){
    let netRevenue = this.get("firmBenchNet");
    return (netRevenue >= -999999999 && 999999999);
  }),
  firmBenchRepeatValidation: validate("firmBenchRepeat",function(){
    let repeatValues = this.get("firmBenchRepeat");
    return (repeatValues >= 0 && repeatValues <= 100);
  }), 
  measureScrollBar: function() {
    var scrollDiv = document.createElement('div');
    scrollDiv.className = 'scrollbar-measure';
    document.body.appendChild(scrollDiv);
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  },
actions: {

	showFirmBenchModal: function (status) {
		this.set('firmBenchModal', status);
      this.set("submitted", false); 
    if(status) {
      let scrollbarWidth = this.measureScrollBar();
      Ember.$('body').addClass("hiddenScrollBar").css({"padding-right": scrollbarWidth}).addClass("slideModal-open");
    } else {
      Ember.run.later((function() {
        let bodyStyle = document.body.style;
        if (bodyStyle.removeAttribute) {
          bodyStyle.removeAttribute('padding-right');
        }
        else {
          bodyStyle.removeProperty('padding-right');
        }
        Ember.$('body').removeClass("hiddenScrollBar slideModal-open");
      }), 200);
    }
    
	},
	backToHomeScreen: function () {
		this.set('isCharts', false);
	},
	submitfirmBench: function () {
		let sizeValue = this.get("firmSizevalue");
		let specializationValue = this.get("firmSpecializationValue");
		/* let firmType = this.get("firmType"); */
		let firmBenchNet = this.get("firmBenchNet");
		let firmBenchProfit = this.get("firmBenchProfit");
		let firmBenchRepeat = this.get("firmBenchRepeat");
	
			let firmBenchNetValue = parseInt(firmBenchNet);
			let firmBenchProfitValue = parseInt(firmBenchProfit);
			let firmBenchRepeatValue = parseInt(firmBenchRepeat);
			let modalData = this.get("ModalData");
			let nationalAvg = 0;
      
			//let specializationKey = modalData[firmType]["Firm_Specialization"];
			//let res = _.filter(specializationKey, data => {return data.specialization.value === specializationValue; });
			//let specializationType= res[0].specialization.key;
     

			let ChartData1 = [];
			let ChartData2 = [];
			let ChartData3 = [];
      
      
    this.set("submitted", true);            
    if(this.get("valid")) {
       
			if (firmBenchNetValue) {

				let firmSizeValue = modalData["Net_revenue"];
				//let res = _.filter(firmSizeValue["firm_size"], data => {return data.size.key === sizeValue; });
        let key = firmSizeValue["firm_size"][0].size.key;
				let NRvalue = parseInt(sizeValue); //res[0].size.value;
        let NRsizeValue;
        if(NRvalue){
        if(key === NRvalue){
          NRsizeValue =  firmSizeValue["firm_size"][0].size.value;
        }else if(NRvalue >= 2 && NRvalue <= 4){
            NRsizeValue =  firmSizeValue["firm_size"][1].size.value;
        }else if(NRvalue >= 5 && NRvalue <= 9){
            NRsizeValue =  firmSizeValue["firm_size"][2].size.value;
        }else if(NRvalue >= 10 && NRvalue <= 19){
            NRsizeValue =  firmSizeValue["firm_size"][3].size.value;
        }else if(NRvalue >= 20 && NRvalue <= 49){
            NRsizeValue =  firmSizeValue["firm_size"][4].size.value;
        }else if(NRvalue >= 50 && NRvalue <= 99){
            NRsizeValue =  firmSizeValue["firm_size"][5].size.value;
        }else if(NRvalue >= 100){
            NRsizeValue =  firmSizeValue["firm_size"][6].size.value;
        }
       }
     ChartData1.push({
        "label": "You",
        "value": firmBenchNetValue,
        "color": "#FF0000",
        "prefix": "$",
        "suffix": "/employee",
        "shortCurrency": true
      });
      ChartData1.push({
        "label": "Firms your Size",
        "value": NRsizeValue,
        "color": "#FFC857"
      });
        if(specializationValue){
				let spRes = _.filter(firmSizeValue["Firm_Specialization"], data => {
					return data.specialization.key === specializationValue;
				});
				let NRSpecializationValue = spRes[0].specialization.value;
				let NRSpecializationName = spRes[0].specialization.key;
				ChartData1.push({
					"label": NRSpecializationName,
					"value": NRSpecializationValue,
					"color": "#FFC857"
				});
      } 
				nationalAvg = firmSizeValue.nation_average;
				
				ChartData1.push({
					"label": "NationalAvg",
					"value": nationalAvg,
					"color": "#177E89"
				});
			}
			if (firmBenchProfitValue) {
				let firmSizeValue = modalData["Profitability"];
				//let res = _.filter(firmSizeValue["firm_size"], data => {return data.size.key === sizeValue; });
				//let PrfsizeValue = 0 res[0].size.value;
        let key = firmSizeValue["firm_size"][0].size.key;
				let ProfitsizeValue = parseInt(sizeValue); //res[0].size.value;
        let PrfsizeValue;
        if(ProfitsizeValue){
        if(key === ProfitsizeValue){
          PrfsizeValue =  firmSizeValue["firm_size"][0].size.value;
        }else if(ProfitsizeValue >= 2 && ProfitsizeValue <= 4){
            PrfsizeValue =  firmSizeValue["firm_size"][1].size.value;
        }else if(ProfitsizeValue >= 5 && ProfitsizeValue <= 9){
            PrfsizeValue =  firmSizeValue["firm_size"][2].size.value;
        }else if(ProfitsizeValue >= 10 && ProfitsizeValue <= 19){
            PrfsizeValue =  firmSizeValue["firm_size"][3].size.value;
        }else if(ProfitsizeValue >= 20 && ProfitsizeValue <= 49){
            PrfsizeValue =  firmSizeValue["firm_size"][4].size.value;
        }else if(ProfitsizeValue >= 50 && ProfitsizeValue <= 99){
            PrfsizeValue =  firmSizeValue["firm_size"][5].size.value;
        }else if(ProfitsizeValue >= 100){
            PrfsizeValue =  firmSizeValue["firm_size"][6].size.value;
        }
        }
				ChartData2.push({
					"label": "You",
					"value": firmBenchProfitValue,
					"color": "#FF0000",
          "suffix": "%"
				});
        	ChartData2.push({
					"label": "Firms your Size",
					"value": PrfsizeValue,
					"color": "#FFC857"
				});
        if(specializationValue){
        
          let spRes = _.filter(firmSizeValue["Firm_Specialization"], data => {
            return data.specialization.key === specializationValue;
          });
          let spSpecializationValue = spRes[0].specialization.value;
          let spSpecializationName = spRes[0].specialization.key;
          ChartData2.push({
            "label": spSpecializationName,
            "value": spSpecializationValue,
            "color": "#FFC857"
          });
        }
				nationalAvg = firmSizeValue.nation_average;
				ChartData2.push({
					"label": "NationalAvg",
					"value": nationalAvg,
					"color": "#177E89"
				});
			}
			if (firmBenchRepeatValue) {
				let firmSizeValue = modalData["repeat_clients"];
				// let res = _.filter(firmSizeValue["firm_size"], data => {return data.size.key === sizeValue; });
				//let NAsizeValue = 0; //res[0].size.value;
        
        let key = firmSizeValue["firm_size"][0].size.key;
				let RepeatsizeValue = parseInt(sizeValue); //res[0].size.value;
        let RCsizeValue;
        if(RepeatsizeValue){
        if(key === RepeatsizeValue){
          RCsizeValue =  firmSizeValue["firm_size"][0].size.value;
        }else if(RepeatsizeValue >= 2 && RepeatsizeValue <= 4){
            RCsizeValue =  firmSizeValue["firm_size"][1].size.value;
        }else if(RepeatsizeValue >= 5 && RepeatsizeValue <= 9){
            RCsizeValue =  firmSizeValue["firm_size"][2].size.value;
        }else if(RepeatsizeValue >= 10 && RepeatsizeValue <= 19){
            RCsizeValue =  firmSizeValue["firm_size"][3].size.value;
        }else if(RepeatsizeValue >= 20 && RepeatsizeValue <= 49){
            RCsizeValue =  firmSizeValue["firm_size"][4].size.value;
        }else if(RepeatsizeValue >= 50 && RepeatsizeValue <= 99){
            RCsizeValue =  firmSizeValue["firm_size"][5].size.value;
        }else if(RepeatsizeValue >= 100){
            RCsizeValue =  firmSizeValue["firm_size"][6].size.value;
        }
        }
				ChartData3.push({
					"label": "You",
					"value": firmBenchRepeatValue,
					"color": "#FF0000",
          "suffix": "%"
				});
        ChartData3.push({
					"label": "Firms your Size",
					"value": RCsizeValue,
					"color": "#FFC857"
				});
        if(specializationValue){ 
				let spRes = _.filter(firmSizeValue["Firm_Specialization"], data => {
					return data.specialization.key === specializationValue;
				});
				let NASpecializationValue = spRes[0].specialization.value;
				let NASpecializationName = spRes[0].specialization.key;
				ChartData3.push({
					"label": NASpecializationName,
					"value": NASpecializationValue,
					"color": "#FFC857"
				});
        }
				nationalAvg = firmSizeValue.nation_average;
				ChartData3.push({
					"label": "NationalAvg",
					"value": nationalAvg,
					"color": "#177E89"
				});
			}
      this.send('showFirmBenchModal',false);
      this.set("ChartData1", ChartData1);
			this.set("ChartData2", ChartData2);
			this.set("ChartData3", ChartData3);
			//this.set('firmBenchModal', false);
			this.set('isCharts', true);
     } 
     else
        {
          this.set('firmBenchModal', true);
        }

	},

}
});