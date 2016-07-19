function applySubmitFunction(e){$("#theform").submit(function(a){a.preventDefault();var t="",n=$("input[name=yearfig]:checked").length;if(0!=$("input[name=figuregen]:checked").length&&0==n||0!=$("input[name=figuregen]:checked").length&&0==$("input[name=practicefig]:checked").length&&"netreturns"==$("input[name=figuredisplay]:checked").val())t="<p class=\"alert\">The <em>Generate figure</em> option is selected, but insufficient parameters were selected to produce a figure. To generate a figure, please return to the <a href=\"#\" onclick=\"$('body,html').stop(true,true).animate({scrollTop: $('#figureparameters').offset().top - $('header').height()}, '500', 'swing'); return false;\">figure parameters form</a> and select an efficacy level or a year of adoption, and for a net returns figure, at least one management practice.</p>";else{switch($("input[name=figuredisplay]:checked").val()){case"yield":for(var r=[],i=[],s=0;n>s;s++)r[s]=$("input[name=yearfig]:checked:eq("+s+")").val(),i[s]='<a href="img/figures/'+$("select[name=region]").val().toUpperCase()+"-Yield"+r[s]+'.png" class="swipebox"><img src="img/figures/'+$("select[name=region]").val().toUpperCase()+"-Yield"+r[s]+'.png" style="width: 910px;" alt="Graphical result" /></a>',t+=i[s];break;case"netreturns":for(var r=[],l=[],i=[],c=0;c<$("input[name=practicefig]:checked").length;c++){l[c]=$("input[name=practicefig]:checked:eq("+c+")").val();for(var s=0;n>s;s++)r[s]=$("input[name=yearfig]:checked:eq("+s+")").val(),i[c*$("input[name=practicefig]:checked").length+s]='<a href="img/figures/'+$("select[name=region]").val().toUpperCase()+"-"+l[c].toUpperCase()+r[s]+'.png" class="swipebox"><img src="img/figures/'+$("select[name=region]").val().toUpperCase()+"-"+l[c].toUpperCase()+r[s]+'.png" style="width: 910px;" alt="Graphical result" /></a>',t+=i[c*$("input[name=practicefig]:checked").length+s]}}t+="</p>"}d3.tsv("scenario-presets.tsv",function(a){var n=[],r=[],i=[],s=[];s=["dbp","hp","dp","25","50","75","3","5","10"];for(var l in s)r[s[l]]=!1;var c=[];c=["acdnb","aapo","lpy","bep"];for(var p in c)i[c[p]]=!1;var o=[],u=0,d=Object.keys(a[0]).slice(1);$("input[name=practicetable]:checked").each(function(){var e=$(this).val().toUpperCase();$("input[name=efficacytable]:checked").each(function(){var t=$(this).val();$("input[name=adoptiontable]:checked").each(function(){var n="y"+$(this).val(),r=$("select[name=region]").val()+e+t+n,i;for(var s in a)a[s].index==r&&(i=s);o[u]=$.map(a[i],function(e,a){return e}).slice(1),u++})})});var h="";if(0!=o.length&&0!=$("input[name=outputtable]:checked").length){n.inputs=r,n.outputs=i,$("input[name$=table]:checked").each(function(){var e=$(this).attr("value");"outputtable"==$(this).attr("name")?n.outputs[e]=!0:n.inputs[e]=!0});for(var f="",g=[],m=Object.keys(n.inputs),v=Object.keys(n.outputs),b=0;b<o.length;b++)g[b]="<tr><td>"+o[b][0]+"</td><td>"+o[b][1]+"</td><td>"+o[b][2]+"</td><td>"+o[b][3]+"</td>";var y=0;for(var k in n.outputs){var C=v[y];if(1==n.outputs[C]){f+="<td>"+d[4+y]+"</td>";for(var b=0;b<o.length;b++)g[b]+="<td>"+o[b][4+y]+"</td>"}y++}for(var b=0;b<o.length;b++)g[b]+="</tr>";f="<tr><td>"+d[0]+"</td><td>"+d[1]+"</td><td>"+d[2]+"</td><td>"+d[3]+"</td>"+f+"</tr>",h='<section class="table-wrap"><h3>Output table</h3><table>'+f;for(var w=0;w<g.length;w++)h+=g[w];h+="</table></section>"}else 0!=$("input[name=tablegen]:checked").length&&(h="<p class=\"alert\">The <em>Generate table</em> option is selected, but insufficient parameters were selected to produce an output table. To generate a table, please return to the <a href=\"#\" onclick=\"$('body,html').stop(true,true).animate({scrollTop: $('#tableparameters').offset().top - $('header').height()}, '500', 'swing'); return false;\">table parameters form</a> and select at least one management practice, efficacy level, year of adoption, and output parameter.</p>");for(var T=["Region","Price per ton ($)","Discount Rate","Cultivar","Additional Annual Cost per acre from Double Pruning","Additional Annual Cost per acre from Handpainting TopsinM","Annual Cultural Cost per acre &#8211; Year 0 &#8211; Establishing Vineyard","Annual Cultural Cost per acre &#8211; Year 1 &#8211; Establishing Vineyard","Annual Cultural Cost per acre &#8211; Year 2 &#8211; Establishing Vineyard","Annual Cultural Cost per acre &#8211; Year 3+ Established Vineyard","Annual yield per acre (Tons) &#8211; Year 0","Annual yield per acre (Tons) &#8211; Year 1","Annual yield per acre (Tons) &#8211; Year 2","Annual yield per acre (Tons) &#8211; Year 3","Annual yield per acre (Tons) &#8211; Year 4","Annual yield per acre (Tons) &#8211; Year 5+"],A=["Napa","$5,192","3%","Cabernet Sauvignon","478","71","$32,303","$5,264","$5,304","$7,784","0","0","1","4.5","4.5","4.5"],Y=["Northern San Joaquin","$650","3%","Cabernet Sauvignon","175","45","$12,213","$3,370","$1,004","$3,505","0","0","5","10","10","10"],j=["Central Coast","$1,262","3%","Cabernet Sauvignon","243","90","$9,998","$2,554","$3,501","$4,625","0","0","2.5","5","7.5","7.5"],S=["Lake","$1,623","3%","Cabernet Sauvignon","268","117","$7,301","$6,942","$3,252","$3,404","0","0","0.75","1.5","3.5","5.75"],U=["Sonoma","$2,355","3%","Cabernet Sauvignon","335","74","$26,780","$4,204","$5,186","$6,280","0","0","1.5","3.5","5","5"],x=[{sonoma:U,nsj:Y,cc:j,lake:S,napa:A}],O='<section class="assumptions-wrap"><h3>Parameter Values Used in Calculations</h3><table class="assumptionstable">',y=0;y<T.length;y++)O+="<tr><td>"+T[y]+"</td><td>"+x[0][$("select[name=region]").val()][y]+"</td></tr>";O+="</table></section>";var P='<hr /><h2>Results</h2><p class="landscape-alert" style="font-style: italic;">Tap or click figures to view full-screen. On mobile devices, we recommend viewing your results in landscape mode.</p><p class="print-link"><a href="javascript:window.print()"><i class="fa fa-print" aria-hidden="true"></i> Print these results.</a></p><p class="figure-wrap">';1==e.figurestate&&(P+=t),1==e.tablestate&&(P+=h),P+=O+'<p class="print-link"><a href="javascript:window.print()"><i class="fa fa-print" aria-hidden="true"></i> Print these results.</a></p><p class="adjust-link"><a href="#page" onclick="$(\'body,html\').stop(true,true).animate({scrollTop: $(\'#theform\').offset().top - $(\'header\').height()}, \'500\', \'swing\');">Adjust parameters</a></p>',$(".results").html(P);var V=1;$("input[name=efficacyfig]:checked").length>1?V=$("input[name=efficacyfig]:checked").length:$("input[name=practicefig]:checked").length>1&&"netreturns"==$("input[name=figuredisplay]").val()&&(V=$("input[name=practicefig]:checked").length),$(window).width()/V<910&&$(".results img").each(function(){$(this).css("width",100/V-1+"%")}),$("body,html").stop(!0,!0).animate({scrollTop:$("#results").offset().top-$("header").height()},"500","swing")})})}