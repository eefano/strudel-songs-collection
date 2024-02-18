
stack("c","e","g")
  
    .withHap((hap)=>{ 
        hap.context.tempvalue=hap.value;
        hap.value=hap.context.stacking===undefined?0:hap.context.stacking[0];
        return hap;})
    
    .eq("<0 1 2>").filterValues((val) => val)
    
    .withHap((hap)=>{ 
        hap.value=hap.context.tempvalue;
        delete hap.tempvalue;
        return hap;})

  .note().piano()
  
