function rgb(r, g, b){
    const collOfRgb = [r,g,b];
    
    const result = collOfRgb.map(item => {
        if(item <0) {
            item = 0
        } else if(item > 255) {
            item = 255
        }
        return item.toString(16).toUpperCase().padStart(2, 0);
    })
    
    return result.join('');
  }