var sendto='mailto:insertemail@inhypertextproperties.please'
var faxto=''
var colpari='#80F0FF'
var coldisp='#80E0FF'
var ismail=true
var rmk=''
//inserted by the program
//var sendto='mailto:youraddress@yourprovider.com'
//var faxto='02-12345678'
//var colpari='#fff080'
//var coldisp='#ffe080'
//var ismail=true

//do not touch below, if you aren't an expert
var showTAX=false
var showtotal=true
var showpartial=true

//immediately show the cart
//creaCarrello()
//datiCarrello=parent.finestraCarrello.carrello

//create cart popup
function creaCarrello()
{
 if(!parent.finestraCarrello||parent.finestraCarrello.closed)
 {
   parent.finestraCarrello=open("about:blank","carrello",
     "toolbar=no,width=500,height=400,resizable=1")
   parent.finestraCarrello.document.write('<HTML><HEAD>'
+'<TITLE>Shopping Cart</TITLE></HEAD><frameset rows="100%,*"><frame name=hidden src="about:blank" noresize frameborder=no><frame name=main src="about:blank" frameborder=no></frameset></HTML>')
   parent.finestraCarrello.document.close()

   var srcFramesCar="<HTML><HEAD><TITLE>Cart<\/TITLE><script>var carrello={}<\/script><HEAD><BODY><\/BODY><\/HTML>"
   
   for(i=0;i<=1;i++)
   with(parent.finestraCarrello.frames[i].document)
   {
   write(srcFramesCar)
   close()
   }
   parent.finestraCarrello.carrello={}
  }
}
        
        
//show cart
function MyAddCart(codice, prezzoUnitario, desc)
{
  creaCarrello()
  datiCarrello=parent.finestraCarrello.carrello
  if(!datiCarrello[codice]) datiCarrello[codice]={quantita:1,prezzoUnitario:parseFloat(prezzoUnitario),descr:desc}
  else datiCarrello[codice].quantita++
}
        
        
//show cart
function MyShowCart(codice, prezzoUnitario, simbolo, colorerigapari, colorerigadispari)
{
  var newWin=parent.finestraCarrello.hidden
  var sortedAry=[]
  for(itemCode in datiCarrello) sortedAry[sortedAry.length]=String(itemCode).toLowerCase()
  sortedAry.sort()
  with(newWin.document)
  {
    write("<html><head><script>"
      +"function update(objValue,itemCode){parent.carrello[itemCode].quantita=objValue.replace(/\\D/g,'');setTimeout('parent.opener.MyShowCart(1,1,\""+simbolo+"\",\""+colorerigapari+"\",\""+colorerigadispari+"\")',0)}"
      +"<\/script><\/head><body><form method='post' action="
      +sendto)
    if (ismail) write(" enctype=text/plain ")
    write("><b>Shopping cart<\/b><br><table width=95% border='0' cellspacing='0' >"
      +"<tr><td>N.</td><td>Quantity</td><td>Unit price</td>"
      +"<td>Code</td><td>Descr.</td>")
    if (showpartial) write("<td>Total</td>");
    write("</tr>");
                                for(counter=totale=parziale=0;counter<sortedAry.length;counter++,totale+=parziale)
    {
      itemCode=sortedAry[counter]
parziale=datiCarrello[itemCode].quantita*datiCarrello[itemCode].prezzoUnitario
      unit=datiCarrello[itemCode].prezzoUnitario;
      descc=datiCarrello[itemCode].descr;
      write("<tr bgcolor='"
        +[colorerigadispari,colorerigapari][counter&1]+"'>\n"
        +"<td>"+(counter+1)+".</td>\n<td>\n" 
        +"<input type=hidden name='it_"+itemCode
        +"' value="+counter+">\n"
        +"<input name='itq_"+itemCode+"' size=5 value="                
        +datiCarrello[itemCode].quantita+" onchange='update(this.value,\""+itemCode+"\")'>\n"
        +"<input type=hidden name='itu_"+itemCode
        +"' value='"+unit+"'>\n"
        +"<input type=hidden name='itd_"+itemCode
        +"' value='"+descc+"'>\n"
        +"</td>\n"
        +"<td>"+simbolo+" "+unit+"</td>\n"
        +"<td>"+itemCode+"</td>\n"
        +"<td>"+descc+"</td>\n")
      if (showpartial)
      write("<td>"+simbolo
        +" "+(Math.round(parziale*100)/100)+"</td>\n")
      write("</tr>\n\n")
    }
    if (showtotal)
        write("<tr><td colspan=3>Total:</td><td>"+simbolo+" "
        +Math.round(totale*100)/100+"</td><td>"
        +"<input type=button value='Refresh' ></td></tr>")
        else
        write("<tr><td colspan=5><input type=button value='Refresh' ></td></tr>")
    if(showTAX)
        write("<tr><td colspan=3>Total (TAX incl.):</td><td>"
          +simbolo+" "+(Math.round(totale*120)/100)+"</td></tr>")
    write("</table><br>"
        +"Name: <input name='name' ><br>"
        +"Address: <input name=address ><br>"
        +"Email: <input name=email ><br>"
        +"Phone: <input name=phone ><br>"
        +"Remarks: <input name=remarks ><br><br>"
        +rmk+"<br>"
        )
    if (faxto)
        write(
              "Print this page and send it by fax to "
              +faxto
              +", or press send to send it by Internet.<br>")
        else
        write(
              "Press Send to send the order.<br>")
    write(
        "<input type=submit value='Send'> "
        +"<input type=button value='Print' onClick='javascript:print()' ><br><br> "
        +"Close the window or press Reset to delete the cart.<br>"
        +"<input type=button value='Reset' onClick='javascript:parent.close()' >"
        +"<\/form><\/body><\/html>")
    close()
  }
}
        
function MyAddAndShowCart(cod, prezzoUnit, simb, desc, colp, cold)
{
  MyAddCart(cod,prezzoUnit,desc)
  MyShowCart(cod,prezzoUnit,simb,colp,cold)
}        
