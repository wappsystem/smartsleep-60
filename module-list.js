(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "survey-data":  {url:"$H/m/survey-data.html",Table:"smartsleep-60-survey",form_module:"survey-form"},
        "survey-form":  {url:"$H/m/survey-form.html",Table:"smartsleep-60-survey"},
        "pis-data":  	{url:"$H/m/pis-data.html",Table:"smartsleep-60-pis",form_module:"pis-form"},
        "pis-form":  	{url:"$H/m/pis-form.html",Table:"smartsleep-60-pis"},
        "consent-data": {url:"$H/m/consent-data.html",Table:"smartsleep-60-consent",form_module:"consent-form"},
        "consent-form": {url:"$H/m/consent-form.html",Table:"smartsleep-60-consent"},
        "not_elig":     {url:"$H/m/not_elig.html"},
        "elig":         {url:"$H/m/elig.html"}
   }
    //-------------------------------------------------------------------------------------
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    if(window.location.href.indexOf('tb=demo')!=-1){
        for(p in $vm.module_list){
            $vm.module_list[p].Table="demo-"+$vm.module_list[p].Table;
        }
    }
    //-------------------------------------------------------------------------------------
})();
