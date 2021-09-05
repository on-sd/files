// window.addEventListener('load', function() {
  var mainlist = document.getElementById('filepicker')
  var items = [], textIndex = 0
  var activityHandler = null
  var defPathPrefixes = ["apps", "downloads"]
  
  function fparts(fName) {
    let parts = fName.split('/')
    let basename = parts.pop()
    return {dirname: parts.join('/'), basename: basename}
  }
  
  function refreshFileList() {
    mainlist.innerHTML = ''
    for(let i=0,l=items.length;i<l;i++) {
      let item = document.createElement('div')
      item.innerHTML = items[i].name
      item.classList.add('picker-file')
      mainlist.appendChild(item)
    }
    mainlist.children[0].classList.add('active')
  }
  
  function rescanFiles(pathPrefixes) {
    items = []
    let sdcards = navigator.getDeviceStorages('sdcard'), storageAmount = sdcards.length
    for(let i=0;i<storageAmount;i++) {
      for(let k=0;k<pathPrefixes.length;k++) {
        let fileCursor = sdcards[i].enumerate(pathPrefixes[k])
        fileCursor.onsuccess = function() {
          if(fileCursor.result && fileCursor.result.name !== null) {
            let file = fileCursor.result;
            if(fparts(fileCursor.result.name).basename.indexOf('.zip') > -1) {
              items.push(file)
              refreshFileList()
            }
            fileCursor.continue()
          }
        }
      }
    }
  }
  
  function selectFileByIndex() {
    [].forEach.call(mainlist.children, function(el) {
      el.classList.remove('active')
    })
    let activeElem = mainlist.children[textIndex]
    activeElem.classList.add('active')
    if(activeElem.offsetTop > mainlist.offsetHeight)
      mainlist.scrollTop = activeElem.offsetTop
    else mainlist.scrollTop = 0
  }
  
  function installPkg(packageFile) {
    navigator.mozApps.mgmt.import(packageFile).then(function(){
      alert('Installation successful!')
    }).catch(e=>{
      alert('Installation error: ' + e.name + ' ' + e.message)
    })
    let appGetter = navigator.mozApps.mgmt.getAll()
    appGetter.onsuccess = function() {
      let apps = appGetter.result
      console.dir(apps)
    }
    appGetter.onerror = function(e) {
      console.dir(this.error)
    }
  }
  
  window.addEventListener('keydown', function(e) {
   switch(e.key) {
     case 'ArrowUp': //scroll up
     case 'ArrowLeft':
       textIndex--
       if(textIndex < 0) textIndex = items.length -1
       selectFileByIndex()
       break;
     case 'ArrowDown': //scroll down
     case 'ArrowRight':
       textIndex++
       if(textIndex > (items.length - 1) ) textIndex = 0
       selectFileByIndex()
       break;
     case 'SoftRight': //rescan
       rescanFiles(defPathPrefixes)
       break;
     case 'SoftLeft': //help
       var helpWindow = new MozActivity({
          name: "xyz.831337.omnisd.help",
          data: {}
       })
       helpWindow.onsuccess = function(){}
       break;
     case 'Enter': //pick the file
       var currentFile = items[textIndex]
       if(currentFile)
         installPkg(currentFile)
       break;
   }})
  
  rescanFiles(defPathPrefixes)
  
// }, false)
