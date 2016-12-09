import VerticalBarChartComponent from 'ember-charts/components/vertical-bar-chart';
var ExtendVbcComponent = VerticalBarChartComponent.extend({
  showDetails: Ember.computed('isInteractive', function() {
    if (!this.get('isInteractive')) {
      return Ember.K;
    }

    return (data, i, element) => {
      // Specify whether we are on an individual bar or group
      var isGroup = Ember.isArray(data.values);

      // Do hover detail style stuff here
      element = isGroup ? element.parentNode.parentNode : element;
      d3.select(element).classed('hovered', true);

      // Show tooltip
      var tipLabel = (data.group) ? $("<span class=\"tip-label\" />").text(""): '';
      console.log(tipLabel)
      var content =  $("<span />").append(tipLabel);

      var formatLabel = this.get('formatLabelFunction');
      var addValueLine = function(d) {
        /*var label = $("<span class=\"name\" />").text(d.label + ": Hello");
        content.append(label);*/
        var tooltipString = formatLabel(d.value);
        if(d.shortCurrency) {
          tooltipString = numeral(d.value).format('0a')
        }
        if(d.prefix) {
          tooltipString = d.prefix+" "+tooltipString;
        }
        if(d.suffix) {
          tooltipString = tooltipString+""+d.suffix;
        }
        var value = $("<span class=\"value\">").text(tooltipString);
        content.append(value);
        content.append('<br />');
      };

      if (isGroup) {
        // Display all bar details if hovering over axis group label
        data.values.forEach(addValueLine);
      } else {
        // Just hovering over single bar
        addValueLine(data);
      }
      return this.showTooltip(content.html(), d3.event);
    };
  })
});

export default ExtendVbcComponent;