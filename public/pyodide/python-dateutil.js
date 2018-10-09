var Module=typeof pyodide!=="undefined"?pyodide:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0;Module.finishedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH;if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}else{throw"using preloaded data can only be done on a web page or in a web worker"}var PACKAGE_NAME="python-dateutil.data";var REMOTE_PACKAGE_BASE="python-dateutil.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata.remote_package_size;var PACKAGE_UUID=metadata.package_uuid;function fetchRemotePackage(packageName,packageSize,callback,errback){var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.6",true,true);Module["FS_createPath"]("/lib/python3.6","site-packages",true,true);Module["FS_createPath"]("/lib/python3.6/site-packages","dateutil",true,true);Module["FS_createPath"]("/lib/python3.6/site-packages/dateutil","tz",true,true);Module["FS_createPath"]("/lib/python3.6/site-packages/dateutil/tz","__pycache__",true,true);Module["FS_createPath"]("/lib/python3.6/site-packages/dateutil","parser",true,true);Module["FS_createPath"]("/lib/python3.6/site-packages/dateutil/parser","__pycache__",true,true);Module["FS_createPath"]("/lib/python3.6/site-packages/dateutil","zoneinfo",true,true);Module["FS_createPath"]("/lib/python3.6/site-packages/dateutil/zoneinfo","__pycache__",true,true);Module["FS_createPath"]("/lib/python3.6/site-packages/dateutil","__pycache__",true,true);Module["FS_createPath"]("/lib/python3.6/site-packages","python_dateutil-2.7.2-py3.6.egg-info",true,true);function DataRequest(start,end,audio){this.start=start;this.end=end;this.audio=audio}DataRequest.prototype={requests:{},open:function(mode,name){this.name=name;this.requests[name]=this;Module["addRunDependency"]("fp "+this.name)},send:function(){},onload:function(){var byteArray=this.byteArray.subarray(this.start,this.end);this.finish(byteArray)},finish:function(byteArray){var that=this;Module["FS_createPreloadedFile"](this.name,null,byteArray,true,true,function(){Module["removeRunDependency"]("fp "+that.name)},function(){if(that.audio){Module["removeRunDependency"]("fp "+that.name)}else{err("Preloading file "+that.name+" failed")}},false,true);this.requests[this.name]=null}};var files=metadata.files;for(var i=0;i<files.length;++i){new DataRequest(files[i].start,files[i].end,files[i].audio).open("GET",files[i].filename)}function processPackageData(arrayBuffer){Module.finishedDataFileDownloads++;assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;if(Module["SPLIT_MEMORY"])err("warning: you should run the file packager with --no-heap-copy when SPLIT_MEMORY is used, otherwise copying into the heap may fail due to the splitting");var ptr=Module["getMemory"](byteArray.length);Module["HEAPU8"].set(byteArray,ptr);DataRequest.prototype.byteArray=Module["HEAPU8"].subarray(ptr,ptr+byteArray.length);var files=metadata.files;for(var i=0;i<files.length;++i){DataRequest.prototype.requests[files[i].filename].onload()}Module["removeRunDependency"]("datafile_python-dateutil.data")}Module["addRunDependency"]("datafile_python-dateutil.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.6/site-packages/dateutil/easter.py",start:0,end:2684,audio:0},{filename:"/lib/python3.6/site-packages/dateutil/__init__.py",start:2684,end:2906,audio:0},{filename:"/lib/python3.6/site-packages/dateutil/utils.py",start:2906,end:4747,audio:0},{filename:"/lib/python3.6/site-packages/dateutil/_version.py",start:4747,end:4863,audio:0},{filename:"/lib/python3.6/site-packages/dateutil/relativedelta.py",start:4863,end:29356,audio:0},{filename:"/lib/python3.6/site-packages/dateutil/tzwin.py",start:29356,end:29415,audio:0},{filename:"/lib/python3.6/site-packages/dateutil/rrule.py",start:29415,end:94282,audio:0},{filename:"/lib/python3.6/site-packages/dateutil/_common.py",start:94282,end:95214,audio:0},{filename:"/lib/python3.6/site-packages/dateutil/tz/win.py",start:95214,end:106532,audio:0},{filename:"/lib/python3.6/site-packages/dateutil/tz/tz.py",start:106532,end:162912,audio:0},{filename:"/lib/python3.6/site-packages/dateutil/tz/__init__.py",start:162912,end:163415,audio:0},{filename:"/lib/python3.6/site-packages/dateutil/tz/_factories.py",start:163415,end:164849,audio:0},{filename:"/lib/python3.6/site-packages/dateutil/tz/_common.py",start:164849,end:177741,audio:0},{filename:"/lib/python3.6/site-packages/dateutil/tz/__pycache__/_factories.cpython-36.pyc",start:177741,end:179925,audio:0},{filename:"/lib/python3.6/site-packages/dateutil/tz/__pycache__/_common.cpython-36.pyc",start:179925,end:192150,audio:0},{filename:"/lib/python3.6/site-packages/dateutil/tz/__pycache__/tz.cpython-36.pyc",start:192150,end:232648,audio:0},{filename:"/lib/python3.6/site-packages/dateutil/tz/__pycache__/__init__.cpython-36.pyc",start:232648,end:233293,audio:0},{filename:"/lib/python3.6/site-packages/dateutil/tz/__pycache__/win.cpython-36.pyc",start:233293,end:242766,audio:0},{filename:"/lib/python3.6/site-packages/dateutil/parser/_parser.py",start:242766,end:298524,audio:0},{filename:"/lib/python3.6/site-packages/dateutil/parser/__init__.py",start:298524,end:300251,audio:0},{filename:"/lib/python3.6/site-packages/dateutil/parser/isoparser.py",start:300251,end:313096,audio:0},{filename:"/lib/python3.6/site-packages/dateutil/parser/__pycache__/__init__.cpython-36.pyc",start:313096,end:315110,audio:0},{filename:"/lib/python3.6/site-packages/dateutil/parser/__pycache__/isoparser.cpython-36.pyc",start:315110,end:326028,audio:0},{filename:"/lib/python3.6/site-packages/dateutil/parser/__pycache__/_parser.cpython-36.pyc",start:326028,end:364158,audio:0},{filename:"/lib/python3.6/site-packages/dateutil/zoneinfo/dateutil-zoneinfo.tar.gz",start:364158,end:503238,audio:0},{filename:"/lib/python3.6/site-packages/dateutil/zoneinfo/__init__.py",start:503238,end:509127,audio:0},{filename:"/lib/python3.6/site-packages/dateutil/zoneinfo/rebuild.py",start:509127,end:510846,audio:0},{filename:"/lib/python3.6/site-packages/dateutil/zoneinfo/__pycache__/rebuild.cpython-36.pyc",start:510846,end:512706,audio:0},{filename:"/lib/python3.6/site-packages/dateutil/zoneinfo/__pycache__/__init__.cpython-36.pyc",start:512706,end:518291,audio:0},{filename:"/lib/python3.6/site-packages/dateutil/__pycache__/_common.cpython-36.pyc",start:518291,end:519690,audio:0},{filename:"/lib/python3.6/site-packages/dateutil/__pycache__/easter.cpython-36.pyc",start:519690,end:521849,audio:0},{filename:"/lib/python3.6/site-packages/dateutil/__pycache__/__init__.cpython-36.pyc",start:521849,end:522189,audio:0},{filename:"/lib/python3.6/site-packages/dateutil/__pycache__/tzwin.cpython-36.pyc",start:522189,end:522348,audio:0},{filename:"/lib/python3.6/site-packages/dateutil/__pycache__/utils.cpython-36.pyc",start:522348,end:524431,audio:0},{filename:"/lib/python3.6/site-packages/dateutil/__pycache__/rrule.cpython-36.pyc",start:524431,end:566394,audio:0},{filename:"/lib/python3.6/site-packages/dateutil/__pycache__/relativedelta.cpython-36.pyc",start:566394,end:581229,audio:0},{filename:"/lib/python3.6/site-packages/dateutil/__pycache__/_version.cpython-36.pyc",start:581229,end:581385,audio:0},{filename:"/lib/python3.6/site-packages/python_dateutil-2.7.2-py3.6.egg-info/PKG-INFO",start:581385,end:589203,audio:0},{filename:"/lib/python3.6/site-packages/python_dateutil-2.7.2-py3.6.egg-info/SOURCES.txt",start:589203,end:590788,audio:0},{filename:"/lib/python3.6/site-packages/python_dateutil-2.7.2-py3.6.egg-info/top_level.txt",start:590788,end:590797,audio:0},{filename:"/lib/python3.6/site-packages/python_dateutil-2.7.2-py3.6.egg-info/requires.txt",start:590797,end:590807,audio:0},{filename:"/lib/python3.6/site-packages/python_dateutil-2.7.2-py3.6.egg-info/zip-safe",start:590807,end:590808,audio:0},{filename:"/lib/python3.6/site-packages/python_dateutil-2.7.2-py3.6.egg-info/dependency_links.txt",start:590808,end:590809,audio:0}],remote_package_size:590809,package_uuid:"2632509e-9147-40b3-b61b-248950e3cb7b"})})();