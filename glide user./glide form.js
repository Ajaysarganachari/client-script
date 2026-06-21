function onLoad() {
   Type appropriate comment here, and begin script below
   alert("This is the onChange client script");
 g_form.addErrorMessage("This is an error from error messgae method");
 g_form.addInfoMessage("this is information message");
 g_form.addOption("category","test_to","Test value","1")    g_form.addOption("category","test_to","Test Value");
// g_form.addOption("category","align","Testing","2");
  
// g_form.clearMessages();
// let a = g_form.getValue("assigned_to");
// let b= g_form.getValue("category");
// let c = g_form.getValue("short_description");

// g_form.addInfoMessage(a);
// g_form.addInfoMessage(b);
// g_form.addInfoMessage(c);

// g_form.addErrorMessage("How are you ?");
// g_form.addInfoMessage("I am Fine.");
// g_form.addOption("category","test_val","Test Value","1");
// // g_form.clearMessages();
// // g_form.clearOptions("category");
// // g_form.removeOption("category","software");
// let a=g_form.getBooleanValue("knowledge");
// g_form.addInfoMessage("Knowledge="+a);

// let b=g_form.getBooleanValue("u_boolean_10");
// g_form.addInfoMessage("VIp="+b);

// //   let a = g_form.getBooleanValue("knowledge");
//     // let b = g_form.getBooleanValue("u_boolean_10");

//     // g_form.addInfoMessage("Knowledge: " + a);
//     // g_form.addInfoMessage("VIP: " + b);

// let cat=g_form.getValue("category");
// let assignto=g_form.getValue("assigned_to");
// let sd=g_form.getValue("short_description");

// g_form.addInfoMessage(cat);
// g_form.addInfoMessage(assignto);
// g_form.addInfoMessage(sd);


// let table=g_form.getTableName();
// g_form.addInfoMessage("table name="+table);

// g_form.setMandatory("category",true);
// g_form.setReadOnly("subcategory",false);

// et z=g_form.getDisplayBox("caller_id").value;
// g_form.addInfoMessage(z);
l

// let s=g_form.getDisplayValue("category");
// g_form.addInfoMessage("displayed value="+s);

// let w=g_form.getUniqueValue();
// g_form.addInfoMessage(w);




// g_form.setValue("state",3);
g_form.setValue("caller_id","3282abf03710200044e0bfc8bcbe5d27");
g_form.setValue("short_description","how much you earn");
g_form.setValue("knowledge",false);
g_form.setValue("category","Software 2");
g_form.setValue("state",1);
// g_form.setValue("contact_type",3);
g_form.setValue("impact",3);

// g_form.removeOption("category","software");
g_form.clearValue("short_description");



}
