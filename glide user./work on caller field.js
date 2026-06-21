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
