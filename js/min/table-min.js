function the_table(e,a,t,r,s,n,o,i,l,d,c,y,p){var h=[],u=$("select[name=region]").val();d3.tsv("regional-assumptions.tsv",function(f){var v;switch(u){case"napa":v=0;break;case"nsj":v=1;break;case"cc":v=2;break;case"lake":v=3;break;case"sonoma":v=4;break;case"custom":v=1}isNaN(o)&&(o=f[v].price,h.push("price")),isNaN(e)&&(e="3",h.push("discount")),isNaN(n)&&(n=0,h.push("pc")),isNaN(a)&&(a=f[v].cost0,h.push("cost0")),isNaN(t)&&(t=f[v].cost1,h.push("cost1")),isNaN(r)&&(r=f[v].cost2,h.push("cost2")),isNaN(s)&&(s=f[v].cost3,h.push("cost3")),isNaN(i)&&(i=f[v].yield0,h.push("yield0")),isNaN(l)&&(l=f[v].yield1,h.push("yield1")),isNaN(d)&&(d=f[v].yield2,h.push("yield2")),isNaN(c)&&(c=f[v].yield3,h.push("yield3")),isNaN(y)&&(y=f[v].yield4,h.push("yield4")),isNaN(p)&&(p=f[v].yield5,h.push("yield5"))}),d3.tsv("yield-rates.tsv",function(f){var v=[],b=[],g=[],k=[],m=[],I=[],N=[],w=[],C=[],x=[],D=[],F,T=1/(1+e/100),E=[],A={},j={},S=[],L=[],M=[],q=[],B={healthy:null,untreated:null,"25y3":0,"50y3":0,"75y3":0,"25y5":0,"50y5":0,"75y5":0,"25y10":0,"50y10":0,"75y10":0},J={healthy:null,untreated:null,"25y3":0,"50y3":0,"75y3":0,"25y5":0,"50y5":0,"75y5":0,"25y10":0,"50y10":0,"75y10":0},O={healthy:0,untreated:1,"25y3":0,"50y3":0,"75y3":0,"25y5":0,"50y5":0,"75y5":0,"25y10":0,"50y10":0,"75y10":0},_={healthy:"Healthy, untreated",untreated:"Infected, untreated","25y3":"25% DCE treatment adopted year 3","25y5":"25% DCE treatment adopted year 5","25y10":"25% DCE treatment adopted year 10","50y3":"50% DCE treatment adopted year 3","50y5":"50% DCE treatment adopted year 5","50y10":"50% DCE treatment adopted year 10","75y3":"75% DCE treatment adopted year 3","75y5":"75% DCE treatment adopted year 5","75y10":"75% DCE treatment adopted year 10"},z=Object.keys(_);j.healthy=[],j.untreated=[],A.healthy=[],A.untreated=[];var H=[parseInt(i),parseInt(l),parseInt(d),parseInt(c),parseInt(y),parseInt(p),parseInt(p),parseInt(p),parseInt(p),parseInt(p),parseInt(p),parseInt(p),parseInt(p),parseInt(p),parseInt(p),parseInt(p),parseInt(p),parseInt(p),parseInt(p),parseInt(p),parseInt(p),parseInt(p),parseInt(p),parseInt(p),parseInt(p),parseInt(p)],P=[];for(var R in H)P[R]=H[R]*f[R].noAction/100,j.healthy[R]={x:R,y:H[R]},j.untreated[R]={x:R,y:P[R]};D=[a,t,r,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s];var U=[];for(R in P)U[R]=o*P[R]-D[R];var V=[];for(R in U)F=Math.pow(T,R),V[R]=U[R]*F;var G=[V[0]];for(R=1;R<V.length;R++)G[R]=V[R]+G[R-1];var K=[o*H[0]-D[0]],Q="-";for(R=1;R<H.length;R++)F=Math.pow(T,R),K[R]=(o*H[R]-D[R])*F+K[parseInt(R-1)],K[R]>K[parseInt(R-1)]&&(Q=R);var W=K[25]-G[25];W=0>W?"-$"+parseFloat(-1*W).toFixed(2):"$"+parseFloat(W).toFixed(2);var X=-1;for(R in K)if(K[R+1]>0){X=R;break}-1===X&&(X="Never breaks even",Q="-"),E=[];for(R in K)E[R]=K[R]-G[R];for(var Y=0;V[Y]<0&&25>Y;)Y++;if(25===Y)Y="Untreated vineyard never profitable";else{for(;V[Y]>0&&25>Y;)Y++;Y-=1}var Z="";if(h.length>0){var ee;switch(u){case"napa":ee="Napa";break;case"nsj":ee="Northern San Joaquin";break;case"cc":ee="Central Coast";break;case"lake":ee="Lake";break;case"sonoma":ee="Sonoma";break;case"custom":ee="Northern San Joaquin"}for(Z='<p class="alert">No values specified for: ',R=0;R<h.length;R++){var ae;switch(h[R]){case"price":ae='<a href="#" class="scroll-to-price">price per ton</a>';break;case"discount":ae='<a href="#" class="scroll-to-discount">discount rate</a>';break;case"pc":ae='<a href="#" class="scroll-to-pc">preventative practice cost</a>';break;case"cost0":ae='<a href="#" class="scroll-to-cost0">year 0 cultural cost</a>';break;case"cost1":ae='<a href="#" class="scroll-to-cost1">year 1 cultural cost</a>';break;case"cost2":ae='<a href="#" class="scroll-to-cost2">year 2 cultural cost</a>';break;case"cost3":ae='<a href="#" class="scroll-to-cost3">year 3 cultural cost</a>';break;case"yield0":ae='<a href="#" class="scroll-to-yield0">year 0 yield</a>';break;case"yield1":ae='<a href="#" class="scroll-to-yield1">year 1 yield</a>';break;case"yield2":ae='<a href="#" class="scroll-to-yield2">year 2 yield</a>';break;case"yield3":ae='<a href="#" class="scroll-to-yield3">year 3 yield</a>';break;case"yield4":ae='<a href="#" class="scroll-to-yield4">year 4 yield</a>';break;case"yield5":ae='<a href="#" class="scroll-to-yield5">year 5+ yield</a>'}Z+=ae,R!==h.length-1?Z+=", ":R===h.length-1&&(Z+=".")}var te=$.inArray("pc",h)>=0?" with a preventative practice cost of zero, as with delayed pruning.</p>":".</p>";Z+='</p><p class="alert">Calculations below have been performed using default values for the <strong>'+ee+"</strong> region"+te}var re="<hr /><h2>Results</h2>"+Z+'<section class="figure-area"></section><h3>Output table</h3><table><thead><th><h4>Scenario</h4></th><th><h4>ACDNB</h4></th><th><h4>Age adoption pays off</h4></th><th><h4>Last profitable year</h4></th><th><h4>Infection probability threshold</h4></th></thead><tbody>';re+="<tr><td>"+_.healthy+"</td><td>"+W+"</td><td>"+X+"</td><td>"+Q+"</td><td>0</td></tr>",re+="<tr><td>"+_.untreated+"</td><td>-</td><td>-</td><td>"+Y+"</td><td>1</td></tr>";for(var se=2;se<z.length;se++){for(var ne=z[se],oe=parseInt(ne.substr(3)),ie=[],le=0;oe>le;le++)ie[le]=0;for(le=oe;26>le;le++)ie[le]=n;var de=[];for(R in H)de[R]=o*H[R]-D[R]-ie[R];var ce=[];for(R in de)F=Math.pow(T,R),ce[R]=de[R]*F;var ye=[ce[0]];for(R=1;R<ce.length;R++)ye[R]=ce[R]+ye[R-1];for(R in ye)A.healthy[R]={x:R,y:ye[R]},A.untreated[R]={x:R,y:G[R]};S=[];for(R in H)S[R]=H[R]*f[R][ne]/100;var pe=z[se];j[pe]=[];for(R in H)j[pe][R]={x:R,y:S[R]};L=[];for(R in S)L[R]=o*S[R]-D[R]-ie[R];M=[];for(R in L)F=Math.pow(T,R),M[R]=L[R]*F;for(q=[M[0]],R=1;R<M.length;R++)q[R]=M[R]+q[R-1];A[pe]=[];for(R in H)A[pe][R]={x:R,y:q[R]};for(x=[parseInt(ie[0])],R=1;R<ce.length;R++)x[R]=parseInt(ie[R])+parseInt(x[R-1]);var he=[];for(R in q)he[R]=q[R]-G[R];switch(ne){case"25y3":v=he;break;case"25y5":b=he;break;case"25y10":g=he;break;case"50y3":k=he;break;case"50y5":m=he;break;case"50y10":I=he;break;case"75y3":N=he;break;case"75y5":w=he;break;case"75y10":C=he}for(R in q)if(q[R]>G[R]){B[ne]=R;break}for(0===parseInt(B[ne])&&q[0]<=G[0]&&(B[ne]="Never breaks even"),J[ne]=ne.substr(3);L[parseInt(J[ne])+1]<=0&&parseInt(J[ne])<25;)J[ne]++;if(25===parseInt(J[ne]))J[ne]="Treatment never profitable";else for(;L[parseInt(J[ne])+1]>0&&parseInt(J[ne])<25;)J[ne]++;O[ne]=(K[25]-ye[25])/(q[25]-ye[25]-(G[25]-K[25])),O[ne]>1&&(O[ne]=1),O[ne]=O[ne].toFixed(3);var ue=null!==he[25]?he[25].toFixed(2):"-";"-"!==ue&&0>ue?ue="-$"+parseFloat(-1*ue).toFixed(2):"-"!==ue&&(ue="$"+parseFloat(ue).toFixed(2)),re+="<tr><td>"+_[ne]+"</td><td>"+ue+"</td><td>"+B[ne]+"</td><td>"+J[ne]+"</td><td>"+O[ne]+"</td></tr>"}var fe='<section class="varDefs-printable"><h3 id="variabledefinitions">Variable definitions</h3><p><strong>Cumulative discounted net returns:</strong> The cumulative net returns (returns &minus; costs) per acre over 25 years for a healthy vineyard, an untreated infected vineyard, and infected vineyards where action is taken. Current and future dollar amounts are in 2013 dollars and are discounted to 2013 using a 3% discount rate. </p><p><a id="tablevars"></a></p><p><strong>Additional cumulative discounted net benefits (ACDNB):</strong> The difference in cumulative net returns (returns - costs) per acre over 25 years between an infected vineyard where action is taken and an untreated infected vineyard. Current and future dollar amounts are in 2013 dollars and are discounted to 2013 using a 3% discount rate. </p><p><strong>Last profitable year:</strong> The last year an infected vineyard generates positive annual net returns (returns - costs). This year is the same for discounted and nominal net returns. </p><p><strong>Age adoption pays off:</strong> The age when cumulative discounted net returns (returns – costs) for a treated infected vineyard exceed those from an untreated infected vineyard. </p><p><strong>Infection probability threshold:</strong> The probability of infection where expected cumulative discounted net returns from treating a vineyard equals the expected cumulative discounted net returns from not treating a vineyard. If you perceive a probability of infection less than this probability, then not treating the vineyard generates greater cumulative discounted net returns than a treated vineyard, and vice versa. </p></section>';re+="</tbody></table>"+fe+'<p class="print-link"><a href="javascript:window.print()"><i class="fa fa-print" aria-hidden="true"></i> Print these results.</a></p><p class="adjust-link"><a href="#figureparameters" onclick="$(\'body,html\').stop(true,true).animate({scrollTop: $(\'#figureparameters\').offset().top - $(\'header\').height()}, \'500\', \'swing\');">Adjust parameters</a></p>',$(".results").html(re),the_figure(j,A),$("body,html").stop(!0,!0).animate({scrollTop:$("#results").offset().top-$("header").height()},"500","swing"),activateScrollToLinks()})}