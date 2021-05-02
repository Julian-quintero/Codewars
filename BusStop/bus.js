var number = function(busStops){  

    let left = 0
    let total = 0
      
   busStops.map((item)=>{  
     left=item[0]-item[1]
     total+=left  
   })
  
    return total
  }

