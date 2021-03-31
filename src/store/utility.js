export const updateObject = (oldObject, updatedProperties) => {
  return {
      ...oldObject,
      ...updatedProperties
  }
}

export const createImageThumbnail = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener('load' , (e) => {
      createImage(e.target.result, file)
        .then(res => {
          resolve(res);
        })
    })
  })  
}
const createImage = (result,file) => {
  return new Promise((resolve, reject) => {
    let resultImage = null;
    const img = new Image();
    img.src = result;
    img.onload = () => {
  
      var canvas = document.createElement("canvas")
      var ctx = canvas.getContext("2d");
  
      var canvas2 = document.createElement("canvas")
      var ctx2 = canvas2.getContext("2d");
  
      const scale = .5;
      const scaledWidth = 300;
      const scaledHeight = ( img.height / img.width ) * scaledWidth;
  
      canvas.width = img.width * scale;
      canvas.height = img.height * scale;
      canvas2.width = scaledWidth;
      canvas2.height = scaledHeight;
  
      ctx.drawImage(img,0,0,canvas.width, canvas.height);
      ctx.drawImage(canvas,0,0,canvas.width* scale, canvas.height* scale);
      ctx2.drawImage(canvas,0,0,canvas.width* scale, canvas.height* scale, 0,0,scaledWidth,scaledHeight );
      
      const image  = canvas2.toDataURL("image/png");

      canvas2.toBlob(function(blob) {
        resultImage =  {
          name: file.name,
          size: Math.floor(file.size/1000),
          image: file,
          canvas: canvas2,
          blob: blob
        }
        resolve(resultImage);
      })
    }
  })
}

export const createVideoUrl = (file) => {
  return new Promise((resolve, reject) => {
    var fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file);
    fileReader.onload = function() {
      var blob = new Blob([fileReader.result], {type: file.type});
      var url = URL.createObjectURL(blob);
      resolve({
        videoUrl: url,
        videoFile: file,
        name: file.name,
        size: file.size
      })
    }
  })
}

export const createVideoThumbanil = (video) => {
  return new Promise((resolve, reject) => {
    var canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    canvas.toBlob(function(blob) {
      resolve({
        thumbnail: blob
      })
    })
  })
}