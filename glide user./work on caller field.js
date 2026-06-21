function onChange(control, oldValue, newValue, isLoading, isTemplate) {
   if(g_form.isNewRecord()){
   
   if (isLoading || newValue === '') {
    g_form.setValue("caller_id",g_user.userID);
	g_form.setReadOnly("caller_id",true);
	
      return;
   }

	if(newValue == 'true'){
		g_form.clearValue("caller_id");
		g_form.setReadOnly("caller_id",false);
		g_form.setLabelOf("caller_id","On Behalf User");
	}else{
    g_form.setValue("caller_id",g_user.userID);
	g_form.setReadOnly("caller_id",true);
	}
   
   //Type appropriate comment here, and begin script below
   }
}


example 2=
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
   if(g_form.isNewRecord()){

   
   
   if (isLoading || newValue === '') {

	g_form.setValue("description",g_user.getFullName());
	g_form.setReadOnly("description",true);
      return;
   }

   if(newValue == "true"){
    g_form.clearMessages("description");
	g_form.setReadOnly("description",false);
	 g_form.setValue("description",g_user.firstName);
	 g_form.setLabelOf("description","New User");
   }else{
		g_form.setValue("description",g_user.getFullName());
	g_form.setReadOnly("description",true);
   }

   //Type appropriate comment here, and begin script below
   }
}
