function the_table(e){var t=[];d3.tsv("regional-assumptions.tsv",function(a){var s=regionSwitch(e.regionAssumed,"index");""===e.price&&(e.price=a[s].price,t.push("price")),""===e.discount&&(e.discount="3",t.push("discount")),""===e.pc&&(e.pc=0,t.push("pc")),""===e.cost0&&(e.cost0=a[s].cost0,t.push("cost0")),""===e.cost1&&(e.cost1=a[s].cost1,t.push("cost1")),""===e.cost2&&(e.cost2=a[s].cost2,t.push("cost2")),""===e.cost3&&(e.cost3=a[s].cost3,t.push("cost3")),""===e.yield0&&(e.yield0=a[s].yield0,t.push("yield0")),""===e.yield1&&(e.yield1=a[s].yield1,t.push("yield1")),""===e.yield2&&(e.yield2=a[s].yield2,t.push("yield2")),""===e.yield3&&(e.yield3=a[s].yield3,t.push("yield3")),""===e.yield4&&(e.yield4=a[s].yield4,t.push("yield4")),""===e.yield5&&(e.yield5=a[s].yield5,t.push("yield5")),d3.tsv("yield-rates.tsv",function(a){var s=[],r=[],i=[],n=[],o=[],d=[],l=[],c=[],p=[],u=[],y=[],v,h=1/(1+e.discount/100),f=[],b={},g={},m=[],I=[],w=[],A=[],k={healthy:null,untreated:null,"25y3":0,"50y3":0,"75y3":0,"25y5":0,"50y5":0,"75y5":0,"25y10":0,"50y10":0,"75y10":0},S={healthy:null,untreated:null,"25y3":0,"50y3":0,"75y3":0,"25y5":0,"50y5":0,"75y5":0,"25y10":0,"50y10":0,"75y10":0},x={healthy:0,untreated:1,"25y3":0,"50y3":0,"75y3":0,"25y5":0,"50y5":0,"75y5":0,"25y10":0,"50y10":0,"75y10":0},C={healthy:"Healthy<br /><em>Purely hypothetical scenario. All California vineyards eventually become infected.</em>",untreated:"Expected effects of typical infection","25y3":"Adopted year 3","25y5":"Adopted year 5","25y10":"Adopted year 10","50y3":"Adopted year 3","50y5":"Adopted year 5","50y10":"Adopted year 10","75y3":"Adopted year 3","75y5":"Adopted year 5","75y10":"Adopted year 10"},T=Object.keys(C);g.healthy=[],g.untreated=[],b.healthy=[],b.untreated=[];var Y=[parseInt(e.yield0),parseInt(e.yield1),parseInt(e.yield2),parseInt(e.yield3),parseInt(e.yield4),parseInt(e.yield5),parseInt(e.yield5),parseInt(e.yield5),parseInt(e.yield5),parseInt(e.yield5),parseInt(e.yield5),parseInt(e.yield5),parseInt(e.yield5),parseInt(e.yield5),parseInt(e.yield5),parseInt(e.yield5),parseInt(e.yield5),parseInt(e.yield5),parseInt(e.yield5),parseInt(e.yield5),parseInt(e.yield5),parseInt(e.yield5),parseInt(e.yield5),parseInt(e.yield5),parseInt(e.yield5),parseInt(e.yield5)],D=[];for(var G in Y)D[G]=Y[G]*a[G].noAction/100,g.healthy[G]={x:G,y:Y[G]},g.untreated[G]={x:G,y:D[G]};y=[e.cost0,e.cost1,e.cost2,e.cost3,e.cost3,e.cost3,e.cost3,e.cost3,e.cost3,e.cost3,e.cost3,e.cost3,e.cost3,e.cost3,e.cost3,e.cost3,e.cost3,e.cost3,e.cost3,e.cost3,e.cost3,e.cost3,e.cost3,e.cost3,e.cost3,e.cost3];var F=[];for(G in D)F[G]=e.price*D[G]-y[G];var E=[];for(G in F)v=Math.pow(h,G),E[G]=F[G]*v;var N=[E[0]];for(G=1;G<E.length;G++)N[G]=E[G]+N[G-1];var B=[e.price*Y[0]-y[0]],P="-";for(G=1;G<Y.length;G++)v=Math.pow(h,G),B[G]=(e.price*Y[G]-y[G])*v+B[parseInt(G-1)],B[G]>B[parseInt(G-1)]&&(P=G);var L=currencyFormat(parseFloat(B[25]-N[25]).toFixed(2)),M=-1;for(G in B)if(B[G+1]>0){M=G;break}-1===M&&(M="Never breaks even",P="-"),f=[];for(G in B)f[G]=B[G]-N[G];for(var O=0;E[O]<0&&25>O;)O++;if(25===O)O="Untreated vineyard never profitable";else{for(;E[O]>0&&25>O;)O++;O-=1}var U="";if(t.length>0){var V=regionSwitch(e.regionAssumed,"friendly");for("Custom"===V&&(V="Northern San Joaquin"),U='<p class="alert">No values specified for: ',G=0;G<t.length;G++)U+=valueSwitch(t[G]),G!==t.length-1?U+=", ":G===t.length-1&&(U+=".");var j=$.inArray("pc",t)>=0?" with a preventative practice cost of zero, as with delayed pruning":"";j+='.</p><p class="alert hide-on-print">[Switch to the previous tab or <a href="#" class="close-tab">close this tab</a> to update these parameters and re-run your calculations.]</p>',U+='</p><p class="alert">Calculations below have been performed using default values for the <strong>'+V+"</strong> region"+j}var q="<h2>Results</h2>"+U+'<section class="figure-area"></section><h3>Output table</h3><p class="landscape-alert" style="font-style: italic;">On mobile devices, we recommend viewing your results in landscape mode.</p><div class="output-table"><div class="output-thead"><div class="output-th">Scenario</div><div class="output-th">ACDNB</div><div class="output-th">Age adoption pays off</div><div class="output-th">Last profitable year</div><div class="output-th">Infection probability threshold</div></div><tbody>';q+='<div class="output-tr"><div class="untreated scenarioGroupShadow">&nbsp;</div><div class="untreated scenarioGroup">Untreated vineyard</div></div>',q+='<div class="output-tr"><div class="output-td">'+C.healthy+'</div><div class="output-td">'+L+'</div><div class="output-td">'+M+'</div><div class="output-td">'+P+'</div><div class="output-td">0</div></div>',q+='<div class="output-tr"><div class="output-td">'+C.untreated+'</div><div class="output-td">-</div><div class="output-td">-</div><div class="output-td">'+O+'</div><div class="output-td">1</div></div>';for(var z=2;z<T.length;z++){2!==z&&5!==z&&8!==z||(q+='<div class="output-tr"><div class="scenarioGroupShadow dce'+T[z].substr(0,2)+'">&nbsp;</div><div class="scenarioGroup dce'+T[z].substr(0,2)+'">Preventative management with '+T[z].substr(0,2)+"% DCE</div></div>");for(var R=T[z],_=parseInt(R.substr(3)),H=[],J=0;_>J;J++)H[J]=0;for(J=_;26>J;J++)H[J]=e.pc;var K=[];for(G in Y)K[G]=e.price*Y[G]-y[G]-H[G];var Q=[];for(G in K)v=Math.pow(h,G),Q[G]=K[G]*v;var W=[Q[0]];for(G=1;G<Q.length;G++)W[G]=Q[G]+W[G-1];for(G in W)b.healthy[G]={x:G,y:W[G]},b.untreated[G]={x:G,y:N[G]};m=[];for(G in Y)m[G]=Y[G]*a[G][R]/100;var X=T[z];g[X]=[];for(G in Y)g[X][G]={x:G,y:m[G]};I=[];for(G in m)I[G]=e.price*m[G]-y[G]-H[G];w=[];for(G in I)v=Math.pow(h,G),w[G]=I[G]*v;for(A=[w[0]],G=1;G<w.length;G++)A[G]=w[G]+A[G-1];b[X]=[];for(G in Y)b[X][G]={x:G,y:A[G]};for(u=[parseInt(H[0])],G=1;G<Q.length;G++)u[G]=parseInt(H[G])+parseInt(u[G-1]);var Z=[];for(G in A)Z[G]=A[G]-N[G];switch(R){case"25y3":s=Z;break;case"25y5":r=Z;break;case"25y10":i=Z;break;case"50y3":n=Z;break;case"50y5":o=Z;break;case"50y10":d=Z;break;case"75y3":l=Z;break;case"75y5":c=Z;break;case"75y10":p=Z}for(G in A)if(A[G]>N[G]){k[R]=G;break}for(0===parseInt(k[R])&&A[0]<=N[0]&&(k[R]="Never breaks even"),S[R]=R.substr(3);I[parseInt(S[R])+1]<=0&&parseInt(S[R])<25;)S[R]++;if(25===parseInt(S[R]))S[R]="Treatment never profitable";else for(;I[parseInt(S[R])+1]>0&&parseInt(S[R])<25;)S[R]++;x[R]=(B[25]-W[25])/(A[25]-W[25]-(N[25]-B[25])),x[R]>1&&(x[R]=1),x[R]=x[R].toFixed(3);var ee=null!==Z[25]?Z[25].toFixed(2):"-";"-"!==ee&&(ee=currencyFormat(ee)),q+='<div class="output-tr"><div class="output-td">'+C[R]+'</div><div class="output-td">'+ee+'</div><div class="output-td">'+k[R]+'</div><div class="output-td">'+S[R]+'</div><div class="output-td">'+x[R]+"</div></div>"}var te=["Price per ton","Discount rate","Additional annual cost per acre of preventative practice","Year 0: Establishing vineyard","Year 1: Establishing vineyard","Year 2: Establishing vineyard","Year 3+: Established vineyard","Year 0","Year 1","Year 2","Year 3","Year 4","Year 5+"],ae=[e.price,e.discount+"%",e.pc,e.cost0,e.cost1,e.cost2,e.cost3,e.yield0,e.yield1,e.yield2,e.yield3,e.yield4,e.yield5],se='<section class="assumptions-wrap"><h3>Parameter Values Used in Calculations</h3>';if("custom"!==e.regionBasis)se+='<p class="parameterSetDescription">All parameters are set to '+regionSwitch(e.regionBasis,"friendly")+" regional default values in the present set of calculations.";else if(0===t.length)se+='<p class="parameterSetDescription">These values describe a custom scenario designed by the user of this tool.</p>';else{for(se+='<p class="parameterSetDescription">These values describe a custom scenario, designed by the user of this tool, except where '+regionSwitch(e.regionAssumed,"friendly")+" regional defaults have been incorporated for unspecified values: ",G=0;G<t.length;G++)se+=valueSwitch(t[G]),t.length>2&&G!==t.length-1&&(se+=", "),G===t.length-2&&(se+=" and "),G===t.length-1&&(se+=".</p>");-1!==t.indexOf("pc")&&(se+='<p class="parameterSetDescription">The default preventative practice cost is zero, as with delayed pruning.</p>')}se+='<div class="assumptions-table">';for(var G=0;G<te.length;G++){var re=0===G||2===G||3===G||4===G||5===G||6===G?currencyFormat(ae[G]):ae[G];3===G&&(se+='<div class="assumptions-tr"><div class="variableGroupShadow">&nbsp;</div><div class="variableGroup">Annual cultural cost per acre</div></div>'),7===G&&(se+='<div class="assumptions-tr"><div class="variableGroupShadow">&nbsp;</div><div class="variableGroup">Annual yield per acre in tons</div></div>'),se+='<div class="assumptions-tr"><div class="assumptions-td">'+te[G]+'</div><div class="assumptions-td">'+re+"</div></div>"}se+="</div></section>";var ie='<p class="glossary-link hide-on-print"><a href="variable-definitions.html">Variable definitions</a></p><section class="varDefs-printable"><h3 id="variabledefinitions">Variable definitions</h3><p><strong>Cumulative discounted net returns:</strong> The cumulative net returns (returns &minus; costs) per acre over 25 years for a healthy vineyard, an untreated infected vineyard, and infected vineyards where action is taken. Current and future dollar amounts are in 2013 dollars and are discounted to 2013 using a 3% discount rate. </p><p><a id="tablevars"></a></p><p><strong>Additional cumulative discounted net benefits (ACDNB):</strong> The difference in cumulative net returns (returns - costs) per acre over 25 years between an infected vineyard where action is taken and an untreated infected vineyard. Current and future dollar amounts are in 2013 dollars and are discounted to 2013 using a 3% discount rate. </p><p><strong>Last profitable year:</strong> The last year an infected vineyard generates positive annual net returns (returns - costs). This year is the same for discounted and nominal net returns. </p><p><strong>Age adoption pays off:</strong> The age when cumulative discounted net returns (returns – costs) for a treated infected vineyard exceed those from an untreated infected vineyard. </p><p><strong>Infection probability threshold:</strong> The probability of infection where expected cumulative discounted net returns from treating a vineyard equals the expected cumulative discounted net returns from not treating a vineyard. If you perceive a probability of infection less than this probability, then not treating the vineyard generates greater cumulative discounted net returns than a treated vineyard, and vice versa. </p></section>';q+="</tbody></div>"+se+ie+'<p class="print-link"><a href="javascript:window.print()"><i class="fa fa-print" aria-hidden="true"></i> Print these results.</a></p><p class="hide-on-print"><a href="#" class="close-tab">Close results tab</a></p>',$(".results").html(q);var ne=[];e.year3&&ne.push("year3"),e.year5&&ne.push("year5"),e.year10&&ne.push("year10");var oe={pc:e.pc,friendlyRegion:regionSwitch(e.regionBasis,"friendly")},de=$.localStorage,le=[ne,oe,e.figuredisplay,g,b];de.set("the-figure-parameters",le),the_figure(le[0],le[1],le[2],le[3],le[4]),$("body,html").stop(!0,!0).animate({scrollTop:$("#results").offset().top-$("header").height()},"500","swing"),activateCloseTabLinks(),styleGlossaryLinks()})})}