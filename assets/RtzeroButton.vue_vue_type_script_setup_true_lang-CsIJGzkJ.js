var M=Object.defineProperty;var A=(t,x,e)=>x in t?M(t,x,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[x]=e;var a=(t,x,e)=>(A(t,typeof x!="symbol"?x+"":x,e),e);import{r as b,d as q,b as R,f as u,o as p,c as L,e as I,w as S,g as w,h as P,i as D,a as g}from"./index-D_KheEFR.js";class T{constructor(x){a(this,"port");a(this,"end");this.port=x,this.end=async()=>{}}static async begin(x,e=!1){var n;const f=new T(x);await f.enterRawRepl(e);try{await f.exec("import sys,os")}catch(s){throw await((n=f.end)==null?void 0:n.call(f)),s}return f}async interruptProgram(x=2e4){const e=Date.now()+x;for(;x<=0||Date.now()<e;){await this.port.write("");try{let f=await this.port.readUntil(">>> ",500);this.port.prevRecvCbk&&f!==`\r
>>> `&&this.port.prevRecvCbk(f),await this.port.flushInput();return}catch(f){throw f}}throw new Error("Board is not responding")}async enterRawRepl(x=!1){const e=await this.port.startTransaction();try{await this.interruptProgram(),await this.port.flushInput(),await this.port.write("\r"),await this.port.readUntil(`raw REPL; CTRL-B to exit\r
`),x&&(await this.port.write(""),await this.port.readUntil(`raw REPL; CTRL-B to exit\r
`)),this.end=async()=>{try{await this.port.write(""),await this.port.readUntil(`>\r
`),await this.port.readUntil(">>> ")}finally{e()}}}catch(f){throw e(),f}}async exec(x,e=5e3,f=!1){await this.port.readUntil(">"),await this.port.write(x),await this.port.write("");const n=await this.port.readExactly(2);if(n!=="OK")throw new Error(n);this.port.emit=f,f&&this.port.prevRecvCbk(this.port.receivedData);const s=(await this.port.readUntil("",e)).slice(0,-1),l=(await this.port.readUntil("",e)).slice(0,-1);if(l.length)throw new Error(l);return s}async readFile(x){const e=await this.exec(`
try:
 import binascii
 h=lambda x: binascii.hexlify(x).decode()
 h(b'')
except:
 h=lambda b: ''.join('{:02x}'.format(byte) for byte in b)
with open('${x}','rb') as f:
 while 1:
  b=f.read(64)
  if not b:break
  print(h(b),end='')
`);return e.length?new Uint8Array(e.match(/../g).map(f=>parseInt(f,16))):new Uint8Array}async writeFile(x,e,f=128,n=!1){if(typeof e=="string"){const r=new TextEncoder;e=new Uint8Array(r.encode(e))}const s=r=>Array.from(r).map(i=>i.toString(16).padStart(2,"0")).join(""),l=r=>{r=new Uint8Array(r);let i="b'";for(let c of r)c>=32&&c<=126?c===92||c===39?i+="\\"+String.fromCharCode(c):i+=String.fromCharCode(c):i+="\\x"+c.toString(16).padStart(2,"0");return i+="'",i},o=n?x:".viper.tmp";await this.exec(`
try:
 import binascii
 h=binascii.unhexlify
 h('')
except:
 h=lambda s: bytes(int(s[i:i+2], 16) for i in range(0, len(s), 2))
f=open('${o}','wb')
w=lambda d: f.write(h(d))
o=f.write
`);for(let r=0;r<e.byteLength;r+=f){const i=e.slice(r,r+f),c="w('"+s(i)+"')",_="o("+l(i)+")";c.length<_.length?await this.exec(c):await this.exec(_)}n?await this.exec("f.close()"):await this.exec(`f.close()
try: os.remove('${x}')
except: pass
os.rename('${o}','${x}')
`)}async getDeviceInfo(){const x=await this.exec(`
try: u=os.uname()
except: u=('','','','',sys.platform)
try: v=sys.version.split(';')[1].strip()
except: v='MicroPython '+u[2]
mpy=getattr(sys.implementation, '_mpy', 0)
sp=':'.join(sys.path)
d=[u[4],u[2],u[0],v,mpy>>10,mpy&0xFF,(mpy>>8)&3,sp]
print('|'.join(str(x) for x in d))
`);let[e,f,n,s,l,o,r,i]=x.trim().split("|"),c=i.split(":");try{l=["","x86","x64","armv6","armv6m","armv7m","armv7em","armv7emsp","armv7emdp","xtensa","xtensawin","rv32imc"][parseInt(l)]}catch{l=""}let _=parseInt(o,10),h=parseInt(r,10);return _||(_="py"),{machine:e,release:f,sysname:n,version:s,mpy_arch:l,mpy_ver:_,mpy_sub:h,sys_path:c}}async touchFile(x){await this.exec(`
f=open('${x}','wb')
f.close()
`)}async makePath(x){await this.exec(`
p=''
for d in '${x}'.split('/'):
 if not d: continue
 p += '/'+d
 try: os.mkdir(p)
 except OSError as e:
  if e.args[0] not in (17, 20): raise
`)}async removeFile(x){await this.exec(`
try:
 os.remove('${x}')
except OSError as e:
 if e.args[0] == 39:
  throw new Error('Directory not empty')
 else:
  throw e
`)}async removeDir(x){await this.exec(`
try:
 os.rmdir('${x}')
except OSError as e:
 if e.args[0] == 39:
  throw new Error('Directory not empty')
 else:
  throw e
`)}async getFsStats(x="/"){return(await this.exec(`
s = os.statvfs('${x}')
fs = s[1] * s[2]
ff = s[3] * s[0]
fu = fs - ff
print('%s|%s|%s'%(fu,ff,fs))
`)).trim().split("|")}async walkFs(){const x=await this.exec(`
def walk(p):
 for n in os.listdir(p if p else '/'):
  fn=p+'/'+n
  try: s=os.stat(fn)
  except: s=(0,)*7
  try:
   if s[0] & 0x4000 == 0:
    print('f|'+fn+'|'+str(s[6]))
   elif n not in ('.','..'):
    print('d|'+fn+'|'+str(s[6]))
    walk(fn)
  except:
   print('f|'+p+'/???|'+str(s[6]))
walk('')
`);let e=[];for(const f of x.split(`
`)){if(!f)continue;let n=e,[s,l,o]=f.trim().split("|"),r=l.split("/"),i;s==="f"&&(i=r.pop());for(const c of r){if(!c)continue;let _=n.filter(h=>h.name===c&&"content"in h);if(_.length)n=_[0].content;else{const h=n;n=[],h.push({name:c,path:r.join("/"),content:n})}}s==="f"&&n.push({name:i,path:l,size:parseInt(o,10)})}return e}async readSysInfoMD(){return await this.exec(`
import gc
gc.collect()
mu = gc.mem_alloc()
mf = gc.mem_free()
ms = mu + mf
uname=os.uname()
p=print
def size_fmt(size):
 suffixes = ['B','KiB','MiB','GiB','TiB']
 i = 0
 while size > 1024 and i < len(suffixes)-1:
  i += 1
  size //= 1024
 return "%d%s" % (size, suffixes[i])
p('## Machine')
p('- Name: \`'+uname.machine+'\`')
try:
 gc.collect()
 import microcontroller as uc
 p('- CPU: \`%s @ %s MHz\`' % (sys.platform, uc.cpu.frequency // 1_000_000))
 p('- UID: \`%s\`' % (uc.cpu.uid.hex(),))
 p('- Temp.: \`%s °C\`' % (uc.cpu.temperature,))
 p('- Voltage: \`%s V\`' % (uc.cpu.voltage,))
except:
 try:
  gc.collect()
  import machine
  p('- CPU: \`%s @ %s MHz\`' % (sys.platform, machine.freq() // 1_000_000))
 except:
  p('- CPU: \`'+sys.platform+'\`')
p()
p('## System')
p('- Version: \`'+sys.version.split(";")[1].strip()+'\`')
if ms:
 p('- Memory use:  \`%s / %s, free: %d%%\`' % (size_fmt(mu), size_fmt(ms), (mf * 100) // ms))
`)}}function C(t){return new Promise(x=>setTimeout(x,t))}class B{constructor(){a(this,"_lock",Promise.resolve());this._lock=Promise.resolve()}acquire(){let x;const e=new Promise(n=>x=n),f=this._lock.then(()=>x);return this._lock=this._lock.then(()=>e),f}}document.querySelector.bind(document);document.getElementById.bind(document);class k{constructor(){a(this,"mutex");a(this,"inTransaction");a(this,"receivedData");a(this,"activityCallback");a(this,"receiveCallback");a(this,"disconnectCallback");a(this,"writeChunk");a(this,"emit");a(this,"info");a(this,"prevRecvCbk");if(new.target===k)throw new Error("Cannot instantiate abstract class Transport");this.mutex=new B,this.inTransaction=!1,this.receivedData="",this.activityCallback=()=>{},this.receiveCallback=()=>{},this.disconnectCallback=()=>{},this.prevRecvCbk=x=>{},this.writeChunk=128,this.emit=!1,this.info={}}async getInfo(){return this.info}async write(x){const f=new TextEncoder().encode(x);try{let n=0;for(;n<f.byteLength;){const s=f.slice(n,n+this.writeChunk);await this.writeBytes(s),this.activityCallback(),n+=this.writeChunk}}catch(n){throw n}}onActivity(x){this.activityCallback=x}onReceive(x){this.receiveCallback=x}onDisconnect(x){this.disconnectCallback=x}async startTransaction(){await C(10);const x=await this.mutex.acquire();return this.prevRecvCbk=this.receiveCallback,this.inTransaction=!0,this.receivedData="",this.receiveCallback=e=>{this.receivedData+=e,this.emit&&this.prevRecvCbk&&this.prevRecvCbk(e)},()=>{this.prevRecvCbk&&(this.receiveCallback=this.prevRecvCbk,this.receiveCallback(this.receivedData)),this.receivedData="",this.inTransaction=!1,x()}}async readExactly(x,e=5e3){if(!this.inTransaction)throw new Error("Not in transaction");let f=Date.now()+e;for(;e<=0||Date.now()<f;){if(this.receivedData.length>=x){const s=this.receivedData.substring(0,x);return this.receivedData=this.receivedData.substring(x),s}const n=this.receivedData.length;await C(10),this.receivedData.length>n&&(f=Date.now()+e)}throw new Error("Timeout")}async readUntil(x,e=5e3){if(!this.inTransaction)throw new Error("Not in transaction");let f=Date.now()+e;for(;e<=0||Date.now()<f;){const n=this.receivedData.indexOf(x)+x.length;if(n>=x.length){const l=this.receivedData.substring(0,n);return this.receivedData=this.receivedData.substring(n),l}const s=this.receivedData.length;await C(10),this.receivedData.length>s&&(f=Date.now()+e)}throw new Error("Timeout reached before finding the ending sequence")}}class O extends k{constructor(e=null){super();a(this,"port");a(this,"reader");a(this,"writer");a(this,"serial");if(this.port=void 0,this.reader=null,this.writer=null,this.serial=e||navigator.serial,!this.serial)throw new Error("WebSerial not available")}async requestAccess(){var s,l,o,r;const n={filters:[{usbVendorId:11914,usbProductId:5}]};this.port=await((s=this.serial)==null?void 0:s.requestPort(n));try{const i=(l=this.port)==null?void 0:l.getInfo();this.info={vid:(o=i==null?void 0:i.usbVendorId)==null?void 0:o.toString(16).padStart(4,"0"),pid:(r=i==null?void 0:i.usbProductId)==null?void 0:r.toString(16).padStart(4,"0")}}catch(i){throw i}}async connect(){var e,f;if(!this.port)throw new Error("Port is not available");await this.port.open({baudRate:115200}),this.reader=((e=this.port.readable)==null?void 0:e.getReader())||null,this.writer=((f=this.port.writable)==null?void 0:f.getWriter())||null,this.reader&&this.listen()}async disconnect(){if(!this.reader||!this.port)throw new Error("No active connection to disconnect from");try{await this.reader.cancel()}catch{}await this.port.forget()}async writeBytes(e){if(!this.writer)throw new Error("Writer is not initialized");await this.writer.write(e)}async listen(){if(!this.reader)throw new Error("Reader is not initialized");const e=new TextDecoder;await this.write(""),await this.write("");try{for(;;){const{value:f,done:n}=await this.reader.read();if(n||!f)break;this.receiveCallback(e.decode(f))}}catch(f){throw this.disconnectCallback(),f}}async flushInput(){if(!this.reader)throw new Error("Reader is not initialized");this.receivedData=""}}const F=`VERSION = '0.1'

from machine import Pin, PWM, Timer, ADC, SPI
from micropython import schedule, const
from time import ticks_ms, ticks_us, sleep, sleep_ms
import ustruct
import framebuf


font_height = 31
font_max_width = 26

_font =\\
b'\\x0f\\x00\\x00\\x07\\x00\\x00\\xc0\\x07\\x00\\x00\\xe0\\x07\\x00\\x00\\xe0\\x07'\\
b'\\x00\\x00\\xf0\\x01\\x67\\x00\\xf0\\xc0\\xf7\\x00\\xf0\\xe0\\xf7\\x00\\xf0\\xe0'\\
b'\\x67\\x00\\xf0\\xf1\\x01\\x00\\xe0\\xff\\x00\\x00\\xe0\\x7f\\x00\\x00\\xc0\\x3f'\\
b'\\x00\\x00\\x00\\x1f\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x09\\x00'\\
b'\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00'\\
b'\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00'\\
b'\\x00\\x00\\x00\\x00\\x08\\x00\\xf0\\xff\\xf3\\x00\\xf0\\xff\\xf3\\x00\\xf0\\xff'\\
b'\\xf3\\x00\\xf0\\xff\\x63\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00'\\
b'\\x00\\x00\\x00\\x00\\x00\\x00\\x0a\\x00\\xf0\\x0f\\x00\\x00\\xf0\\x0f\\x00\\x00'\\
b'\\xf0\\x0f\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\xf0\\x0f\\x00\\x00'\\
b'\\xf0\\x0f\\x00\\x00\\xf0\\x0f\\x00\\x00\\x10\\x00\\x00\\x00\\x00\\x00\\x00\\x00'\\
b'\\x0f\\x00\\x00\\x00\\x0e\\x00\\x00\\x0e\\x0e\\x00\\x00\\x0e\\x7e\\x00\\x00\\xfe'\\
b'\\x7f\\x00\\xe0\\xff\\x7f\\x00\\xe0\\xff\\x0f\\x00\\xe0\\x0f\\x0e\\x00\\x00\\x0e'\\
b'\\x0e\\x00\\x00\\x0e\\x7f\\x00\\x00\\xfe\\x7f\\x00\\xe0\\xff\\x7f\\x00\\xe0\\xff'\\
b'\\x0f\\x00\\xe0\\x0f\\x0e\\x00\\x00\\x0e\\x0e\\x00\\x00\\x0e\\x00\\x00\\x0e\\x00'\\
b'\\x00\\x1f\\x0e\\x00\\x80\\x3f\\x1e\\x00\\xc0\\x3f\\x3e\\x00\\xc0\\x79\\x3c\\x00'\\
b'\\xc0\\x71\\x38\\x00\\xf0\\xff\\xff\\x00\\xf0\\xff\\xff\\x00\\xc0\\xe1\\x38\\x00'\\
b'\\xc0\\xe3\\x38\\x00\\xc0\\xe7\\x3f\\x00\\x80\\xc7\\x1f\\x00\\x00\\x86\\x0f\\x00'\\
b'\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x17\\x00\\x80\\x07\\x00\\x00\\xc0\\x0f'\\
b'\\x00\\x00\\xe0\\x1f\\x00\\x00\\xf0\\x3c\\x00\\x00\\x70\\x38\\x80\\x00\\x70\\x38'\\
b'\\xe0\\x00\\x70\\x38\\xf8\\x00\\xf0\\x3c\\x7e\\x00\\xe0\\x1f\\x1f\\x00\\xc0\\xcf'\\
b'\\x0f\\x00\\x80\\xf7\\x03\\x00\\x00\\xfc\\x00\\x00\\x00\\x3f\\x1e\\x00\\x80\\x8f'\\
b'\\x7f\\x00\\xe0\\x87\\x7f\\x00\\xf0\\xc1\\xf3\\x00\\x70\\xc0\\xe1\\x00\\x10\\xc0'\\
b'\\xe1\\x00\\x00\\xc0\\xf3\\x00\\x00\\x80\\x7f\\x00\\x00\\x80\\x7f\\x00\\x00\\x00'\\
b'\\x1e\\x00\\x00\\x00\\x00\\x00\\x13\\x00\\x00\\x00\\x0f\\x00\\x00\\x80\\x3f\\x00'\\
b'\\x00\\xc0\\x3f\\x00\\x80\\xe7\\x7f\\x00\\xe0\\x7f\\xf8\\x00\\xe0\\x3f\\xf8\\x00'\\
b'\\xf0\\x3f\\xf0\\x00\\xf0\\x78\\xf0\\x00\\xf0\\xf8\\xf0\\x00\\xf0\\xff\\xf3\\x00'\\
b'\\xe0\\xdf\\xff\\x00\\xe0\\x8f\\xff\\x00\\x80\\x07\\x7e\\x00\\x00\\xc0\\xff\\x00'\\
b'\\x00\\xc0\\xff\\x00\\x00\\xc0\\xff\\x00\\x00\\xc0\\xc3\\x00\\x00\\x00\\x80\\x00'\\
b'\\x00\\x00\\x00\\x00\\x05\\x00\\xf0\\x0f\\x00\\x00\\xf0\\x0f\\x00\\x00\\xf0\\x0f'\\
b'\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x09\\x00\\x00\\xfc\\x03\\x00'\\
b'\\x80\\xff\\x1f\\x00\\xe0\\xff\\x7f\\x00\\xf8\\xff\\xff\\x01\\xfc\\x01\\xf8\\x03'\\
b'\\x3e\\x00\\xc0\\x07\\x0e\\x00\\x00\\x07\\x02\\x00\\x00\\x04\\x00\\x00\\x00\\x00'\\
b'\\x09\\x00\\x02\\x00\\x00\\x04\\x0e\\x00\\x00\\x07\\x3e\\x00\\xc0\\x07\\xfc\\x01'\\
b'\\xf8\\x03\\xf8\\xff\\xff\\x01\\xe0\\xff\\x7f\\x00\\x80\\xff\\x1f\\x00\\x00\\xfc'\\
b'\\x03\\x00\\x00\\x00\\x00\\x00\\x0b\\x00\\x80\\x01\\x00\\x00\\xa0\\x09\\x00\\x00'\\
b'\\xf0\\x1f\\x00\\x00\\xe0\\x0f\\x00\\x00\\xc0\\x07\\x00\\x00\\xe0\\x0f\\x00\\x00'\\
b'\\xf0\\x1d\\x00\\x00\\xa0\\x09\\x00\\x00\\x80\\x01\\x00\\x00\\x00\\x00\\x00\\x00'\\
b'\\x00\\x00\\x00\\x00\\x0f\\x00\\x00\\xc0\\x03\\x00\\x00\\xc0\\x03\\x00\\x00\\xc0'\\
b'\\x03\\x00\\x00\\xc0\\x03\\x00\\x00\\xc0\\x03\\x00\\x00\\xfe\\x7f\\x00\\x00\\xfe'\\
b'\\x7f\\x00\\x00\\xfe\\x7f\\x00\\x00\\xfe\\x7f\\x00\\x00\\xc0\\x03\\x00\\x00\\xc0'\\
b'\\x03\\x00\\x00\\xc0\\x03\\x00\\x00\\xc0\\x03\\x00\\x00\\xc0\\x03\\x00\\x00\\x00'\\
b'\\x00\\x00\\x06\\x00\\x00\\x00\\x60\\x0c\\x00\\x00\\xf0\\x0c\\x00\\x00\\xf0\\x07'\\
b'\\x00\\x00\\xe0\\x03\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x09\\x00\\x00\\xc0'\\
b'\\x03\\x00\\x00\\xc0\\x03\\x00\\x00\\xc0\\x03\\x00\\x00\\xc0\\x03\\x00\\x00\\xc0'\\
b'\\x03\\x00\\x00\\xc0\\x03\\x00\\x00\\xc0\\x03\\x00\\x00\\x00\\x00\\x00\\x00\\x00'\\
b'\\x00\\x00\\x06\\x00\\x00\\x00\\x60\\x00\\x00\\x00\\xf0\\x00\\x00\\x00\\xf0\\x00'\\
b'\\x00\\x00\\x60\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x0a\\x00\\x00\\x00'\\
b'\\xe0\\x00\\x00\\x00\\xfc\\x00\\x00\\xc0\\xff\\x00\\x00\\xf8\\xff\\x00\\x80\\xff'\\
b'\\x1f\\x00\\xf8\\xff\\x03\\x00\\xfc\\x3f\\x00\\x00\\xfc\\x07\\x00\\x00\\x7c\\x00'\\
b'\\x00\\x00\\x04\\x00\\x00\\x00\\x11\\x00\\x00\\xfc\\x03\\x00\\x80\\xff\\x1f\\x00'\\
b'\\xc0\\xff\\x3f\\x00\\xe0\\xff\\x7f\\x00\\xe0\\x07\\x7e\\x00\\xf0\\x01\\xf8\\x00'\\
b'\\xf0\\x00\\xf0\\x00\\xf0\\x00\\xf0\\x00\\xf0\\x00\\xf0\\x00\\xf0\\x01\\xf8\\x00'\\
b'\\xe0\\x07\\x7e\\x00\\xe0\\xff\\x7f\\x00\\xc0\\xff\\x3f\\x00\\x80\\xff\\x1f\\x00'\\
b'\\x00\\xfc\\x03\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x09\\x00\\x80\\x03'\\
b'\\x00\\x00\\x80\\x03\\x00\\x00\\xc0\\x03\\x00\\x00\\xe0\\xff\\xff\\x00\\xf0\\xff'\\
b'\\xff\\x00\\xf0\\xff\\xff\\x00\\xf0\\xff\\xff\\x00\\x00\\x00\\x00\\x00\\x00\\x00'\\
b'\\x00\\x00\\x10\\x00\\x00\\x07\\xf8\\x00\\xc0\\x07\\xfc\\x00\\xc0\\x07\\xfe\\x00'\\
b'\\xe0\\x07\\xff\\x00\\xf0\\x81\\xf7\\x00\\xf0\\x80\\xf3\\x00\\xf0\\xc0\\xf1\\x00'\\
b'\\xf0\\xe0\\xf1\\x00\\xf0\\xe0\\xf0\\x00\\xf0\\xf1\\xf0\\x00\\xe0\\x7f\\xf0\\x00'\\
b'\\xe0\\x7f\\xf0\\x00\\xc0\\x3f\\xf0\\x00\\x00\\x0f\\xf0\\x00\\x00\\x00\\x00\\x00'\\
b'\\x00\\x00\\x00\\x00\\x10\\x00\\x00\\x00\\x0e\\x00\\x00\\x07\\x3e\\x00\\xc0\\x07'\\
b'\\x3e\\x00\\xe0\\x07\\x7e\\x00\\xe0\\x07\\xf8\\x00\\xf0\\x01\\xf0\\x00\\xf0\\xf0'\\
b'\\xf0\\x00\\xf0\\xf0\\xf0\\x00\\xf0\\xf0\\xf0\\x00\\xf0\\xf9\\xf0\\x00\\xf0\\xff'\\
b'\\xf9\\x00\\xe0\\xff\\x7f\\x00\\xc0\\xdf\\x7f\\x00\\x80\\x8f\\x3f\\x00\\x00\\x00'\\
b'\\x0f\\x00\\x00\\x00\\x00\\x00\\x10\\x00\\x00\\x00\\x0f\\x00\\x00\\x80\\x0f\\x00'\\
b'\\x00\\xe0\\x0f\\x00\\x00\\xf8\\x0f\\x00\\x00\\x7c\\x0f\\x00\\x00\\x3f\\x0f\\x00'\\
b'\\x80\\x0f\\x0f\\x00\\xe0\\x07\\x0f\\x00\\xf0\\x01\\x0f\\x00\\xf0\\xff\\xff\\x00'\\
b'\\xf0\\xff\\xff\\x00\\xf0\\xff\\xff\\x00\\xf0\\xff\\xff\\x00\\x00\\x00\\x0f\\x00'\\
b'\\x00\\x00\\x0f\\x00\\x00\\x00\\x00\\x00\\x0f\\x00\\x00\\x70\\x1c\\x00\\xf0\\x7f'\\
b'\\x3c\\x00\\xf0\\x7f\\x7c\\x00\\xf0\\xff\\x7c\\x00\\xf0\\x78\\xf8\\x00\\xf0\\x3c'\\
b'\\xf0\\x00\\xf0\\x3c\\xf0\\x00\\xf0\\x3c\\xf0\\x00\\xf0\\x3c\\xf0\\x00\\xf0\\x7c'\\
b'\\x78\\x00\\xf0\\xf8\\x7f\\x00\\xf0\\xf0\\x3f\\x00\\xf0\\xe0\\x1f\\x00\\x00\\xc0'\\
b'\\x0f\\x00\\x00\\x00\\x00\\x00\\x10\\x00\\x00\\xfc\\x07\\x00\\x00\\xff\\x1f\\x00'\\
b'\\xc0\\xff\\x3f\\x00\\xe0\\xff\\x7f\\x00\\xe0\\xf3\\x78\\x00\\xf0\\x79\\xf0\\x00'\\
b'\\xf0\\x78\\xf0\\x00\\xf0\\x78\\xf0\\x00\\xf0\\x78\\xf0\\x00\\xf0\\xf9\\xf8\\x00'\\
b'\\xe0\\xf3\\x7f\\x00\\xe0\\xf3\\x7f\\x00\\xc0\\xe3\\x3f\\x00\\x00\\x83\\x0f\\x00'\\
b'\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x0e\\x00\\xf0\\x00\\x00\\x00\\xf0\\x00'\\
b'\\x00\\x00\\xf0\\x00\\x00\\x00\\xf0\\x00\\xf8\\x00\\xf0\\x80\\xff\\x00\\xf0\\xe0'\\
b'\\xff\\x00\\xf0\\xf8\\xff\\x00\\xf0\\xfc\\x07\\x00\\xf0\\x7e\\x00\\x00\\xf0\\x1f'\\
b'\\x00\\x00\\xf0\\x07\\x00\\x00\\xf0\\x03\\x00\\x00\\xf0\\x01\\x00\\x00\\xf0\\x00'\\
b'\\x00\\x00\\x10\\x00\\x00\\x00\\x0f\\x00\\x80\\xc7\\x3f\\x00\\xc0\\xef\\x7f\\x00'\\
b'\\xe0\\xff\\x7f\\x00\\xe0\\xff\\xf8\\x00\\xf0\\x7d\\xf0\\x00\\xf0\\x78\\xf0\\x00'\\
b'\\xf0\\x78\\xf0\\x00\\xf0\\x78\\xf0\\x00\\xf0\\x7d\\xf0\\x00\\xe0\\xff\\xf8\\x00'\\
b'\\xe0\\xff\\x7f\\x00\\xc0\\xef\\x7f\\x00\\x80\\xc7\\x3f\\x00\\x00\\x00\\x0f\\x00'\\
b'\\x00\\x00\\x00\\x00\\x10\\x00\\x00\\x3f\\x00\\x00\\x80\\xff\\x30\\x00\\xc0\\xff'\\
b'\\x71\\x00\\xe0\\xff\\x71\\x00\\xf0\\xe1\\xf3\\x00\\xf0\\xc1\\xf3\\x00\\xf0\\xc0'\\
b'\\xf3\\x00\\xf0\\xc0\\xf3\\x00\\xf0\\xc0\\xf3\\x00\\xf0\\xc1\\xf9\\x00\\xe0\\xe1'\\
b'\\x7d\\x00\\xe0\\xff\\x7f\\x00\\xc0\\xff\\x3f\\x00\\x80\\xff\\x1f\\x00\\x00\\xfc'\\
b'\\x03\\x00\\x00\\x00\\x00\\x00\\x06\\x00\\x00\\x18\\x60\\x00\\x00\\x3c\\xf0\\x00'\\
b'\\x00\\x3c\\xf0\\x00\\x00\\x18\\x60\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00'\\
b'\\x06\\x00\\x00\\x18\\x60\\x0c\\x00\\x3c\\xf0\\x0c\\x00\\x3c\\xf0\\x07\\x00\\x18'\\
b'\\xe0\\x03\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x0c\\x00\\x00\\xc0\\x03\\x00'\\
b'\\x00\\xe0\\x07\\x00\\x00\\xe0\\x07\\x00\\x00\\xf0\\x0f\\x00\\x00\\xf0\\x0f\\x00'\\
b'\\x00\\x78\\x1e\\x00\\x00\\x78\\x1e\\x00\\x00\\x38\\x1c\\x00\\x00\\x3c\\x3c\\x00'\\
b'\\x00\\x1c\\x38\\x00\\x00\\x1e\\x78\\x00\\x00\\x00\\x00\\x00\\x0e\\x00\\x00\\x78'\\
b'\\x1e\\x00\\x00\\x78\\x1e\\x00\\x00\\x78\\x1e\\x00\\x00\\x78\\x1e\\x00\\x00\\x78'\\
b'\\x1e\\x00\\x00\\x78\\x1e\\x00\\x00\\x78\\x1e\\x00\\x00\\x78\\x1e\\x00\\x00\\x78'\\
b'\\x1e\\x00\\x00\\x78\\x1e\\x00\\x00\\x78\\x1e\\x00\\x00\\x78\\x1e\\x00\\x00\\x00'\\
b'\\x00\\x00\\x00\\x00\\x00\\x00\\x0c\\x00\\x00\\x1e\\x78\\x00\\x00\\x3c\\x3c\\x00'\\
b'\\x00\\x3c\\x3c\\x00\\x00\\x78\\x1e\\x00\\x00\\x78\\x1e\\x00\\x00\\x70\\x0e\\x00'\\
b'\\x00\\xf0\\x0f\\x00\\x00\\xe0\\x07\\x00\\x00\\xe0\\x07\\x00\\x00\\xc0\\x07\\x00'\\
b'\\x00\\xc0\\x03\\x00\\x00\\x00\\x00\\x00\\x0f\\x00\\x00\\x07\\x00\\x00\\xc0\\x07'\\
b'\\x00\\x00\\xe0\\x07\\x00\\x00\\xe0\\x07\\x00\\x00\\xf0\\x01\\x67\\x00\\xf0\\xc0'\\
b'\\xf7\\x00\\xf0\\xe0\\xf7\\x00\\xf0\\xe0\\x67\\x00\\xf0\\xf1\\x01\\x00\\xe0\\xff'\\
b'\\x00\\x00\\xe0\\x7f\\x00\\x00\\xc0\\x3f\\x00\\x00\\x00\\x1f\\x00\\x00\\x00\\x00'\\
b'\\x00\\x00\\x00\\x00\\x00\\x00\\x16\\x00\\x00\\xf8\\x01\\x00\\x00\\xfe\\x07\\x00'\\
b'\\x80\\xff\\x1f\\x00\\xc0\\x0f\\x1e\\x00\\xc0\\x03\\x3c\\x00\\xe0\\xe1\\x79\\x00'\\
b'\\xe0\\xf8\\x73\\x00\\xf0\\xfc\\xf7\\x00\\x70\\x1c\\xe7\\x00\\x70\\x0e\\xe7\\x00'\\
b'\\x70\\x8e\\xe3\\x00\\x70\\xfe\\xe1\\x00\\x70\\xfc\\xe3\\x00\\xf0\\xfc\\xe7\\x00'\\
b'\\xe0\\x0c\\x77\\x00\\xe0\\x01\\x77\\x00\\xc0\\xc3\\x23\\x00\\xc0\\xff\\x43\\x00'\\
b'\\x00\\xff\\x01\\x00\\x00\\x7e\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00'\\
b'\\x13\\x00\\x00\\x00\\xc0\\x00\\x00\\x00\\xf8\\x00\\x00\\x00\\xfe\\x00\\x00\\xc0'\\
b'\\xff\\x00\\x00\\xf8\\x3f\\x00\\x00\\xff\\x0f\\x00\\xe0\\xff\\x0f\\x00\\xf0\\x1f'\\
b'\\x0f\\x00\\xf0\\x03\\x0f\\x00\\xf0\\x00\\x0f\\x00\\xf0\\x07\\x0f\\x00\\xf0\\x3f'\\
b'\\x0f\\x00\\xc0\\xff\\x0f\\x00\\x00\\xfe\\x0f\\x00\\x00\\xf0\\x7f\\x00\\x00\\x80'\\
b'\\xff\\x00\\x00\\x00\\xfc\\x00\\x00\\x00\\xf0\\x00\\x00\\x00\\x80\\x00\\x12\\x00'\\
b'\\xf0\\xff\\xff\\x00\\xf0\\xff\\xff\\x00\\xf0\\xff\\xff\\x00\\xf0\\xff\\xff\\x00'\\
b'\\xf0\\xf0\\xf0\\x00\\xf0\\xf0\\xf0\\x00\\xf0\\xf0\\xf0\\x00\\xf0\\xf0\\xf0\\x00'\\
b'\\xf0\\xf0\\xf0\\x00\\xf0\\xf0\\xf0\\x00\\xf0\\xf0\\xf0\\x00\\xf0\\xf9\\xf0\\x00'\\
b'\\xf0\\xff\\xf9\\x00\\xe0\\xff\\x7f\\x00\\xc0\\xdf\\x7f\\x00\\x80\\x8f\\x3f\\x00'\\
b'\\x00\\x00\\x1f\\x00\\x00\\x00\\x00\\x00\\x14\\x00\\x00\\xf8\\x01\\x00\\x00\\xfe'\\
b'\\x07\\x00\\x80\\xff\\x1f\\x00\\xc0\\xff\\x3f\\x00\\xc0\\x0f\\x3f\\x00\\xe0\\x03'\\
b'\\x7c\\x00\\xe0\\x01\\x78\\x00\\xf0\\x01\\xf8\\x00\\xf0\\x00\\xf0\\x00\\xf0\\x00'\\
b'\\xf0\\x00\\xf0\\x00\\xf0\\x00\\xf0\\x00\\xf0\\x00\\xf0\\x01\\xf8\\x00\\xe0\\x01'\\
b'\\x78\\x00\\xe0\\x07\\x7e\\x00\\xc0\\x07\\x3e\\x00\\x80\\x07\\x1e\\x00\\x00\\x03'\\
b'\\x0c\\x00\\x00\\x04\\x04\\x00\\x00\\x00\\x00\\x00\\x13\\x00\\xf0\\xff\\xff\\x00'\\
b'\\xf0\\xff\\xff\\x00\\xf0\\xff\\xff\\x00\\xf0\\xff\\xff\\x00\\xf0\\x00\\xf0\\x00'\\
b'\\xf0\\x00\\xf0\\x00\\xf0\\x00\\xf0\\x00\\xf0\\x00\\xf0\\x00\\xf0\\x00\\xf0\\x00'\\
b'\\xf0\\x00\\xf8\\x00\\xe0\\x01\\x78\\x00\\xe0\\x07\\x7e\\x00\\xc0\\xff\\x3f\\x00'\\
b'\\x80\\xff\\x1f\\x00\\x00\\xff\\x0f\\x00\\x00\\xfc\\x03\\x00\\x00\\x00\\x00\\x00'\\
b'\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x11\\x00\\xf0\\xff\\xff\\x00\\xf0\\xff'\\
b'\\xff\\x00\\xf0\\xff\\xff\\x00\\xf0\\xff\\xff\\x00\\xf0\\xf0\\xf0\\x00\\xf0\\xf0'\\
b'\\xf0\\x00\\xf0\\xf0\\xf0\\x00\\xf0\\xf0\\xf0\\x00\\xf0\\xf0\\xf0\\x00\\xf0\\xf0'\\
b'\\xf0\\x00\\xf0\\xf0\\xf0\\x00\\xf0\\xf0\\xf0\\x00\\xf0\\xf0\\xf0\\x00\\xf0\\x00'\\
b'\\xf0\\x00\\xf0\\x00\\xf0\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x10\\x00'\\
b'\\xf0\\xff\\xff\\x00\\xf0\\xff\\xff\\x00\\xf0\\xff\\xff\\x00\\xf0\\xff\\xff\\x00'\\
b'\\xf0\\xf0\\x00\\x00\\xf0\\xf0\\x00\\x00\\xf0\\xf0\\x00\\x00\\xf0\\xf0\\x00\\x00'\\
b'\\xf0\\xf0\\x00\\x00\\xf0\\xf0\\x00\\x00\\xf0\\xf0\\x00\\x00\\xf0\\xf0\\x00\\x00'\\
b'\\xf0\\xf0\\x00\\x00\\xf0\\x00\\x00\\x00\\xf0\\x00\\x00\\x00\\x00\\x00\\x00\\x00'\\
b'\\x15\\x00\\x00\\xf8\\x01\\x00\\x00\\xfe\\x0f\\x00\\x80\\xff\\x1f\\x00\\xc0\\xff'\\
b'\\x3f\\x00\\xc0\\x0f\\x7f\\x00\\xe0\\x03\\x7c\\x00\\xe0\\x01\\xf8\\x00\\xf0\\x01'\\
b'\\xf0\\x00\\xf0\\x00\\xf0\\x00\\xf0\\x00\\xf0\\x00\\xf0\\xe0\\xf1\\x00\\xf0\\xe0'\\
b'\\xf1\\x00\\xf0\\xe1\\x79\\x00\\xe0\\xe1\\x79\\x00\\xe0\\xe3\\x3d\\x00\\xc0\\xe7'\\
b'\\xff\\x00\\x80\\xe7\\xff\\x00\\x00\\xe3\\xff\\x00\\x00\\xe4\\xff\\x00\\x00\\x00'\\
b'\\x00\\x00\\x00\\x00\\x00\\x00\\x14\\x00\\xf0\\xff\\xff\\x00\\xf0\\xff\\xff\\x00'\\
b'\\xf0\\xff\\xff\\x00\\xf0\\xff\\xff\\x00\\x00\\xf0\\x00\\x00\\x00\\xf0\\x00\\x00'\\
b'\\x00\\xf0\\x00\\x00\\x00\\xf0\\x00\\x00\\x00\\xf0\\x00\\x00\\x00\\xf0\\x00\\x00'\\
b'\\x00\\xf0\\x00\\x00\\x00\\xf0\\x00\\x00\\xf0\\xff\\xff\\x00\\xf0\\xff\\xff\\x00'\\
b'\\xf0\\xff\\xff\\x00\\xf0\\xff\\xff\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00'\\
b'\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x07\\x00\\xf0\\xff\\xff\\x00\\xf0\\xff'\\
b'\\xff\\x00\\xf0\\xff\\xff\\x00\\xf0\\xff\\xff\\x00\\x00\\x00\\x00\\x00\\x00\\x00'\\
b'\\x00\\x00\\x00\\x00\\x00\\x00\\x0f\\x00\\x00\\x00\\x0f\\x00\\x00\\x00\\x3f\\x00'\\
b'\\x00\\x00\\x7f\\x00\\x00\\x00\\x7f\\x00\\x00\\x00\\xf8\\x00\\x00\\x00\\xf0\\x00'\\
b'\\x00\\x00\\xf0\\x00\\x00\\x00\\xf0\\x00\\x00\\x00\\xf0\\x00\\x00\\x00\\xf8\\x00'\\
b'\\xf0\\xff\\x7f\\x00\\xf0\\xff\\x7f\\x00\\xf0\\xff\\x3f\\x00\\xf0\\xff\\x0f\\x00'\\
b'\\x00\\x00\\x00\\x00\\x12\\x00\\xf0\\xff\\xff\\x00\\xf0\\xff\\xff\\x00\\xf0\\xff'\\
b'\\xff\\x00\\xf0\\xff\\xff\\x00\\x00\\xf0\\x01\\x00\\x00\\xfc\\x00\\x00\\x00\\xfe'\\
b'\\x00\\x00\\x00\\xff\\x01\\x00\\x80\\xff\\x07\\x00\\xc0\\xef\\x0f\\x00\\xe0\\x87'\\
b'\\x3f\\x00\\xf0\\x01\\x7f\\x00\\xf0\\x00\\xfc\\x00\\x70\\x00\\xf8\\x00\\x30\\x00'\\
b'\\xf0\\x00\\x10\\x00\\xc0\\x00\\x10\\x00\\x80\\x00\\x00\\x00\\x00\\x00\\x10\\x00'\\
b'\\xf0\\xff\\xff\\x00\\xf0\\xff\\xff\\x00\\xf0\\xff\\xff\\x00\\xf0\\xff\\xff\\x00'\\
b'\\x00\\x00\\xf0\\x00\\x00\\x00\\xf0\\x00\\x00\\x00\\xf0\\x00\\x00\\x00\\xf0\\x00'\\
b'\\x00\\x00\\xf0\\x00\\x00\\x00\\xf0\\x00\\x00\\x00\\xf0\\x00\\x00\\x00\\xf0\\x00'\\
b'\\x00\\x00\\xf0\\x00\\x00\\x00\\xf0\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00'\\
b'\\x18\\x00\\xf0\\xff\\xff\\x00\\xf0\\xff\\xff\\x00\\xf0\\xff\\xff\\x00\\xf0\\xff'\\
b'\\xff\\x00\\xf0\\x07\\x00\\x00\\xf0\\x7f\\x00\\x00\\x80\\xff\\x07\\x00\\x00\\xfc'\\
b'\\x3f\\x00\\x00\\xc0\\xff\\x00\\x00\\x00\\xfe\\x00\\x00\\x00\\xfe\\x00\\x00\\xc0'\\
b'\\xff\\x00\\x00\\xfc\\x3f\\x00\\x80\\xff\\x07\\x00\\xf0\\x7f\\x00\\x00\\xf0\\x07'\\
b'\\x00\\x00\\xf0\\xff\\xff\\x00\\xf0\\xff\\xff\\x00\\xf0\\xff\\xff\\x00\\xf0\\xff'\\
b'\\xff\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00'\\
b'\\x00\\x00\\x14\\x00\\xf0\\xff\\xff\\x00\\xf0\\xff\\xff\\x00\\xf0\\xff\\xff\\x00'\\
b'\\xf0\\xff\\xff\\x00\\xf0\\x07\\x00\\x00\\xc0\\x1f\\x00\\x00\\x00\\x3f\\x00\\x00'\\
b'\\x00\\xfc\\x00\\x00\\x00\\xf0\\x03\\x00\\x00\\xc0\\x0f\\x00\\x00\\x80\\x3f\\x00'\\
b'\\x00\\x00\\xfe\\x00\\xf0\\xff\\xff\\x00\\xf0\\xff\\xff\\x00\\xf0\\xff\\xff\\x00'\\
b'\\xf0\\xff\\xff\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00'\\
b'\\x00\\x00\\x00\\x00\\x16\\x00\\x00\\xf8\\x01\\x00\\x00\\xfe\\x07\\x00\\x80\\xff'\\
b'\\x1f\\x00\\xc0\\xff\\x3f\\x00\\xc0\\x0f\\x3f\\x00\\xe0\\x03\\x7c\\x00\\xe0\\x01'\\
b'\\x78\\x00\\xf0\\x01\\xf8\\x00\\xf0\\x00\\xf0\\x00\\xf0\\x00\\xf0\\x00\\xf0\\x00'\\
b'\\xf0\\x00\\xf0\\x00\\xf0\\x00\\xf0\\x01\\xf8\\x00\\xe0\\x01\\x78\\x00\\xe0\\x03'\\
b'\\x7c\\x00\\xc0\\x0f\\x3f\\x00\\xc0\\xff\\x3f\\x00\\x80\\xff\\x1f\\x00\\x00\\xfe'\\
b'\\x07\\x00\\x00\\xf8\\x01\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x12\\x00'\\
b'\\xf0\\xff\\xff\\x00\\xf0\\xff\\xff\\x00\\xf0\\xff\\xff\\x00\\xf0\\xff\\xff\\x00'\\
b'\\xf0\\xe0\\x01\\x00\\xf0\\xe0\\x01\\x00\\xf0\\xe0\\x01\\x00\\xf0\\xe0\\x01\\x00'\\
b'\\xf0\\xe0\\x01\\x00\\xf0\\xe0\\x01\\x00\\xf0\\xf1\\x01\\x00\\xe0\\xff\\x00\\x00'\\
b'\\xe0\\xff\\x00\\x00\\xc0\\x7f\\x00\\x00\\x00\\x1f\\x00\\x00\\x00\\x00\\x00\\x00'\\
b'\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x15\\x00\\x00\\xf8\\x01\\x00\\x00\\xff'\\
b'\\x0f\\x00\\x80\\xff\\x1f\\x00\\xc0\\xff\\x3f\\x00\\xe0\\x0f\\x7e\\x00\\xe0\\x03'\\
b'\\x7c\\x00\\xf0\\x01\\xf8\\x00\\xf0\\x00\\xf0\\x00\\xf0\\x00\\xf1\\x00\\xf0\\x80'\\
b'\\xf3\\x00\\xf0\\xc0\\xf7\\x00\\xf0\\x80\\xff\\x00\\xf0\\x01\\xff\\x00\\xe0\\x03'\\
b'\\x7e\\x00\\xe0\\x0f\\x7e\\x00\\xc0\\xff\\x7f\\x00\\x80\\xff\\xff\\x00\\x00\\xfe'\\
b'\\x77\\x00\\x00\\xf8\\x21\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x12\\x00'\\
b'\\xf0\\xff\\xff\\x00\\xf0\\xff\\xff\\x00\\xf0\\xff\\xff\\x00\\xf0\\xff\\xff\\x00'\\
b'\\xf0\\xe0\\x01\\x00\\xf0\\xe0\\x01\\x00\\xf0\\xe0\\x01\\x00\\xf0\\xe0\\x03\\x00'\\
b'\\xf0\\xe0\\x0f\\x00\\xf0\\xe0\\x3f\\x00\\xf0\\xf1\\x7f\\x00\\xe0\\xff\\xfc\\x00'\\
b'\\xe0\\xff\\xf0\\x00\\xc0\\x7f\\xe0\\x00\\x00\\x1f\\x80\\x00\\x00\\x00\\x00\\x00'\\
b'\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x12\\x00\\x00\\x00\\x04\\x00\\x80\\x0f'\\
b'\\x1e\\x00\\xc0\\x1f\\x3e\\x00\\xe0\\x3f\\x7e\\x00\\xe0\\x3f\\x7c\\x00\\xf0\\x39'\\
b'\\xf8\\x00\\xf0\\x70\\xf0\\x00\\xf0\\x70\\xf0\\x00\\xf0\\x70\\xf0\\x00\\xf0\\x70'\\
b'\\xf0\\x00\\xf0\\x60\\xf0\\x00\\xf0\\xe1\\xf8\\x00\\xe0\\xe3\\x78\\x00\\xe0\\xc7'\\
b'\\x7f\\x00\\xc0\\xc3\\x7f\\x00\\x80\\x83\\x3f\\x00\\x00\\x02\\x0f\\x00\\x00\\x00'\\
b'\\x00\\x00\\x0f\\x00\\xf0\\x00\\x00\\x00\\xf0\\x00\\x00\\x00\\xf0\\x00\\x00\\x00'\\
b'\\xf0\\x00\\x00\\x00\\xf0\\x00\\x00\\x00\\xf0\\xff\\xff\\x00\\xf0\\xff\\xff\\x00'\\
b'\\xf0\\xff\\xff\\x00\\xf0\\xff\\xff\\x00\\xf0\\x00\\x00\\x00\\xf0\\x00\\x00\\x00'\\
b'\\xf0\\x00\\x00\\x00\\xf0\\x00\\x00\\x00\\xf0\\x00\\x00\\x00\\x00\\x00\\x00\\x00'\\
b'\\x12\\x00\\xf0\\xff\\x07\\x00\\xf0\\xff\\x1f\\x00\\xf0\\xff\\x3f\\x00\\xf0\\xff'\\
b'\\x7f\\x00\\x00\\x00\\x7c\\x00\\x00\\x00\\xf8\\x00\\x00\\x00\\xf0\\x00\\x00\\x00'\\
b'\\xf0\\x00\\x00\\x00\\xf0\\x00\\x00\\x00\\xf0\\x00\\x00\\x00\\xf8\\x00\\x00\\x00'\\
b'\\x7c\\x00\\xf0\\xff\\x7f\\x00\\xf0\\xff\\x3f\\x00\\xf0\\xff\\x1f\\x00\\xf0\\xff'\\
b'\\x07\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x11\\x00\\x30\\x00\\x00\\x00'\\
b'\\xf0\\x01\\x00\\x00\\xf0\\x0f\\x00\\x00\\xf0\\x7f\\x00\\x00\\xc0\\xff\\x03\\x00'\\
b'\\x00\\xfe\\x1f\\x00\\x00\\xe0\\xff\\x00\\x00\\x00\\xff\\x00\\x00\\x00\\xf8\\x00'\\
b'\\x00\\x00\\xff\\x00\\x00\\xe0\\xff\\x00\\x00\\xfe\\x1f\\x00\\xc0\\xff\\x03\\x00'\\
b'\\xf0\\x7f\\x00\\x00\\xf0\\x0f\\x00\\x00\\xf0\\x01\\x00\\x00\\x30\\x00\\x00\\x00'\\
b'\\x19\\x00\\x70\\x00\\x00\\x00\\xf0\\x03\\x00\\x00\\xf0\\x3f\\x00\\x00\\xf0\\xff'\\
b'\\x01\\x00\\x80\\xff\\x1f\\x00\\x00\\xf8\\xff\\x00\\x00\\x80\\xff\\x00\\x00\\x00'\\
b'\\xfc\\x00\\x00\\xe0\\xff\\x00\\x00\\xff\\xff\\x00\\xf0\\xff\\x07\\x00\\xf0\\x3f'\\
b'\\x00\\x00\\xf0\\x03\\x00\\x00\\xf0\\x1f\\x00\\x00\\xf0\\xff\\x03\\x00\\x80\\xff'\\
b'\\x7f\\x00\\x00\\xf8\\xff\\x00\\x00\\x00\\xff\\x00\\x00\\x00\\xff\\x00\\x00\\xf0'\\
b'\\xff\\x00\\x00\\xff\\x3f\\x00\\xf0\\xff\\x07\\x00\\xf0\\x7f\\x00\\x00\\xf0\\x07'\\
b'\\x00\\x00\\xf0\\x00\\x00\\x00\\x11\\x00\\x10\\x00\\x80\\x00\\x30\\x00\\xe0\\x00'\\
b'\\xf0\\x00\\xf0\\x00\\xf0\\x01\\xfc\\x00\\xf0\\x07\\xfe\\x00\\xc0\\x9f\\x3f\\x00'\\
b'\\x80\\xff\\x0f\\x00\\x00\\xfe\\x07\\x00\\x00\\xfc\\x01\\x00\\x00\\xfe\\x07\\x00'\\
b'\\x80\\xff\\x0f\\x00\\xc0\\x9f\\x3f\\x00\\xf0\\x07\\x7f\\x00\\xf0\\x03\\xfc\\x00'\\
b'\\xf0\\x00\\xf8\\x00\\x70\\x00\\xe0\\x00\\x10\\x00\\x80\\x00\\x12\\x00\\x10\\x00'\\
b'\\x00\\x00\\x30\\x00\\x00\\x00\\xf0\\x00\\x00\\x00\\xf0\\x03\\x00\\x00\\xf0\\x0f'\\
b'\\x00\\x00\\xc0\\x3f\\x00\\x00\\x00\\x7f\\x00\\x00\\x00\\xfc\\xff\\x00\\x00\\xf0'\\
b'\\xff\\x00\\x00\\xf0\\xff\\x00\\x00\\xfc\\xff\\x00\\x00\\x7f\\x00\\x00\\xc0\\x3f'\\
b'\\x00\\x00\\xf0\\x0f\\x00\\x00\\xf0\\x03\\x00\\x00\\xf0\\x00\\x00\\x00\\x30\\x00'\\
b'\\x00\\x00\\x10\\x00\\x00\\x00\\x11\\x00\\x00\\x00\\xe0\\x00\\xf0\\x00\\xf8\\x00'\\
b'\\xf0\\x00\\xfc\\x00\\xf0\\x00\\xfe\\x00\\xf0\\x00\\xff\\x00\\xf0\\x80\\xff\\x00'\\
b'\\xf0\\xc0\\xf3\\x00\\xf0\\xf0\\xf1\\x00\\xf0\\xf8\\xf0\\x00\\xf0\\x7c\\xf0\\x00'\\
b'\\xf0\\x3e\\xf0\\x00\\xf0\\x0f\\xf0\\x00\\xf0\\x07\\xf0\\x00\\xf0\\x03\\xf0\\x00'\\
b'\\xf0\\x01\\xf0\\x00\\xf0\\x00\\xf0\\x00\\x00\\x00\\x00\\x00\\x09\\x00\\xff\\xff'\\
b'\\xff\\x0f\\xff\\xff\\xff\\x0f\\xff\\xff\\xff\\x0f\\xff\\xff\\xff\\x0f\\x0f\\x00'\\
b'\\x00\\x0f\\x0f\\x00\\x00\\x0f\\x0f\\x00\\x00\\x0f\\x00\\x00\\x00\\x00\\x00\\x00'\\
b'\\x00\\x00\\x0a\\x00\\x04\\x00\\x00\\x00\\x3c\\x00\\x00\\x00\\xfc\\x03\\x00\\x00'\\
b'\\xfc\\x1f\\x00\\x00\\xf8\\xff\\x01\\x00\\xc0\\xff\\x1f\\x00\\x00\\xfc\\xff\\x00'\\
b'\\x00\\xe0\\xff\\x00\\x00\\x00\\xfe\\x00\\x00\\x00\\xe0\\x00\\x09\\x00\\x0f\\x00'\\
b'\\x00\\x0f\\x0f\\x00\\x00\\x0f\\x0f\\x00\\x00\\x0f\\xff\\xff\\xff\\x0f\\xff\\xff'\\
b'\\xff\\x0f\\xff\\xff\\xff\\x0f\\xff\\xff\\xff\\x0f\\x00\\x00\\x00\\x00\\x00\\x00'\\
b'\\x00\\x00\\x0f\\x00\\x00\\x80\\x01\\x00\\x00\\xf0\\x01\\x00\\x00\\xfc\\x01\\x00'\\
b'\\x80\\xff\\x01\\x00\\xe0\\x3f\\x00\\x00\\xf0\\x07\\x00\\x00\\xf0\\x01\\x00\\x00'\\
b'\\xf0\\x03\\x00\\x00\\xf0\\x1f\\x00\\x00\\xc0\\xff\\x00\\x00\\x00\\xfe\\x01\\x00'\\
b'\\x00\\xf8\\x01\\x00\\x00\\xc0\\x01\\x00\\x00\\x00\\x01\\x00\\x00\\x00\\x00\\x00'\\
b'\\x17\\x00\\x00\\x00\\x00\\x0f\\x00\\x00\\x00\\x0f\\x00\\x00\\x00\\x0f\\x00\\x00'\\
b'\\x00\\x0f\\x00\\x00\\x00\\x0f\\x00\\x00\\x00\\x0f\\x00\\x00\\x00\\x0f\\x00\\x00'\\
b'\\x00\\x0f\\x00\\x00\\x00\\x0f\\x00\\x00\\x00\\x0f\\x00\\x00\\x00\\x0f\\x00\\x00'\\
b'\\x00\\x0f\\x00\\x00\\x00\\x0f\\x00\\x00\\x00\\x0f\\x00\\x00\\x00\\x0f\\x00\\x00'\\
b'\\x00\\x0f\\x00\\x00\\x00\\x0f\\x00\\x00\\x00\\x0f\\x00\\x00\\x00\\x0f\\x00\\x00'\\
b'\\x00\\x0f\\x00\\x00\\x00\\x0f\\x00\\x00\\x00\\x0f\\x00\\x00\\x00\\x0f\\x0c\\x00'\\
b'\\x08\\x00\\x00\\x00\\x18\\x00\\x00\\x00\\x38\\x00\\x00\\x00\\x78\\x00\\x00\\x00'\\
b'\\x70\\x00\\x00\\x00\\x60\\x00\\x00\\x00\\x40\\x00\\x00\\x00\\x00\\x00\\x00\\x00'\\
b'\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00'\\
b'\\x11\\x00\\x00\\x40\\x3c\\x00\\x00\\x30\\x7e\\x00\\x00\\x38\\x7f\\x00\\x00\\x7c'\\
b'\\xff\\x00\\x00\\x3e\\xf3\\x00\\x00\\x1e\\xf3\\x00\\x00\\x1e\\xf3\\x00\\x00\\x1e'\\
b'\\xf1\\x00\\x00\\x9e\\x71\\x00\\x00\\xbe\\x79\\x00\\x00\\xfc\\xff\\x00\\x00\\xfc'\\
b'\\xff\\x00\\x00\\xf8\\xff\\x00\\x00\\xf0\\xff\\x00\\x00\\x00\\x00\\x00\\x00\\x00'\\
b'\\x00\\x00\\x00\\x00\\x00\\x00\\x12\\x00\\xfc\\xff\\xff\\x00\\xfc\\xff\\xff\\x00'\\
b'\\xfc\\xff\\xff\\x00\\xfc\\xff\\xff\\x00\\x00\\x7c\\x3c\\x00\\x00\\x3c\\x78\\x00'\\
b'\\x00\\x1e\\xf0\\x00\\x00\\x1e\\xf0\\x00\\x00\\x1e\\xf0\\x00\\x00\\x1e\\xf0\\x00'\\
b'\\x00\\x3e\\xf8\\x00\\x00\\x7c\\x7c\\x00\\x00\\xfc\\x7f\\x00\\x00\\xf8\\x3f\\x00'\\
b'\\x00\\xf0\\x1f\\x00\\x00\\xc0\\x07\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00'\\
b'\\x10\\x00\\x00\\xc0\\x07\\x00\\x00\\xf0\\x1f\\x00\\x00\\xf8\\x3f\\x00\\x00\\xfc'\\
b'\\x7f\\x00\\x00\\x7c\\x7c\\x00\\x00\\x3e\\xf8\\x00\\x00\\x1e\\xf0\\x00\\x00\\x1e'\\
b'\\xf0\\x00\\x00\\x1e\\xf0\\x00\\x00\\x1e\\xf0\\x00\\x00\\x3c\\xf8\\x00\\x00\\x7c'\\
b'\\x7c\\x00\\x00\\x78\\x38\\x00\\x00\\x30\\x18\\x00\\x00\\x20\\x08\\x00\\x00\\x00'\\
b'\\x00\\x00\\x12\\x00\\x00\\xc0\\x07\\x00\\x00\\xf0\\x1f\\x00\\x00\\xf8\\x3f\\x00'\\
b'\\x00\\xfc\\x7f\\x00\\x00\\x7e\\xfc\\x00\\x00\\x3e\\xf8\\x00\\x00\\x1e\\xf0\\x00'\\
b'\\x00\\x1e\\xf0\\x00\\x00\\x1e\\xf0\\x00\\x00\\x3c\\x78\\x00\\x00\\x7c\\x7c\\x00'\\
b'\\xfc\\xff\\xff\\x00\\xfc\\xff\\xff\\x00\\xfc\\xff\\xff\\x00\\xfc\\xff\\xff\\x00'\\
b'\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x10\\x00\\x00\\xe0'\\
b'\\x0f\\x00\\x00\\xf0\\x1f\\x00\\x00\\xf8\\x3f\\x00\\x00\\xfc\\x7f\\x00\\x00\\xdc'\\
b'\\x7b\\x00\\x00\\xde\\xf3\\x00\\x00\\xde\\xf3\\x00\\x00\\xde\\xf3\\x00\\x00\\xde'\\
b'\\xf3\\x00\\x00\\xde\\xfb\\x00\\x00\\xfc\\x7b\\x00\\x00\\xfc\\x7b\\x00\\x00\\xf8'\\
b'\\x33\\x00\\x00\\xf0\\x03\\x00\\x00\\x80\\x03\\x00\\x00\\x00\\x00\\x00\\x09\\x00'\\
b'\\x00\\x1c\\x00\\x00\\x00\\x1c\\x00\\x00\\xc0\\xff\\xff\\x00\\xf0\\xff\\xff\\x00'\\
b'\\xf0\\xff\\xff\\x00\\xf8\\xff\\xff\\x00\\x78\\x1c\\x00\\x00\\x3c\\x1c\\x00\\x00'\\
b'\\x3c\\x1c\\x00\\x00\\x11\\x00\\x00\\xc0\\x07\\x08\\x00\\xf0\\x1f\\x1c\\x00\\xf8'\\
b'\\x3f\\x3c\\x00\\xfc\\x7f\\x3c\\x00\\x7e\\xfc\\x7c\\x00\\x3e\\xf8\\x78\\x00\\x1e'\\
b'\\xf0\\x78\\x00\\x1e\\xf0\\x78\\x00\\x1e\\xf0\\x78\\x00\\x3c\\x78\\x7c\\x00\\x78'\\
b'\\x7c\\x3e\\x00\\xfe\\xff\\x3f\\x00\\xfe\\xff\\x1f\\x00\\xfe\\xff\\x0f\\x00\\xfe'\\
b'\\xff\\x03\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x10\\x00\\xfc\\xff\\xff\\x00'\\
b'\\xfc\\xff\\xff\\x00\\xfc\\xff\\xff\\x00\\xfc\\xff\\xff\\x00\\x00\\x3c\\x00\\x00'\\
b'\\x00\\x1e\\x00\\x00\\x00\\x1e\\x00\\x00\\x00\\x1e\\x00\\x00\\x00\\x1e\\x00\\x00'\\
b'\\x00\\x3e\\x00\\x00\\x00\\xfc\\xff\\x00\\x00\\xfc\\xff\\x00\\x00\\xf8\\xff\\x00'\\
b'\\x00\\xe0\\xff\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x07\\x00\\x60\\xfe'\\
b'\\xff\\x00\\xf0\\xfe\\xff\\x00\\xf0\\xfe\\xff\\x00\\x60\\xfe\\xff\\x00\\x00\\x00'\\
b'\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x06\\x00\\x00\\x00\\x00\\x78'\\
b'\\x00\\x00\\x00\\x78\\x60\\xfe\\xff\\x7f\\xf0\\xfe\\xff\\x3f\\xf0\\xfe\\xff\\x3f'\\
b'\\x60\\xfe\\xff\\x0f\\x10\\x00\\xfc\\xff\\xff\\x00\\xfc\\xff\\xff\\x00\\xfc\\xff'\\
b'\\xff\\x00\\xfc\\xff\\xff\\x00\\x00\\xc0\\x07\\x00\\x00\\xe0\\x03\\x00\\x00\\xf0'\\
b'\\x07\\x00\\x00\\xfc\\x0f\\x00\\x00\\xfe\\x3f\\x00\\x00\\x3e\\xff\\x00\\x00\\x1e'\\
b'\\xfc\\x00\\x00\\x0e\\xf8\\x00\\x00\\x06\\xe0\\x00\\x00\\x02\\xc0\\x00\\x00\\x00'\\
b'\\x80\\x00\\x00\\x00\\x00\\x00\\x07\\x00\\xfc\\xff\\xff\\x00\\xfc\\xff\\xff\\x00'\\
b'\\xfc\\xff\\xff\\x00\\xfc\\xff\\xff\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00'\\
b'\\x00\\x00\\x00\\x00\\x1a\\x00\\x00\\xfe\\xff\\x00\\x00\\xfe\\xff\\x00\\x00\\xfe'\\
b'\\xff\\x00\\x00\\xfe\\xff\\x00\\x00\\x3c\\x00\\x00\\x00\\x1e\\x00\\x00\\x00\\x1e'\\
b'\\x00\\x00\\x00\\x1e\\x00\\x00\\x00\\x1e\\x00\\x00\\x00\\x3e\\x00\\x00\\x00\\xfc'\\
b'\\xff\\x00\\x00\\xfc\\xff\\x00\\x00\\xf8\\xff\\x00\\x00\\xfc\\xff\\x00\\x00\\x3e'\\
b'\\x00\\x00\\x00\\x1e\\x00\\x00\\x00\\x1e\\x00\\x00\\x00\\x1e\\x00\\x00\\x00\\x3e'\\
b'\\x00\\x00\\x00\\xfc\\xff\\x00\\x00\\xfc\\xff\\x00\\x00\\xf8\\xff\\x00\\x00\\xe0'\\
b'\\xff\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x10\\x00'\\
b'\\x00\\xfe\\xff\\x00\\x00\\xfe\\xff\\x00\\x00\\xfe\\xff\\x00\\x00\\xfe\\xff\\x00'\\
b'\\x00\\x3c\\x00\\x00\\x00\\x1c\\x00\\x00\\x00\\x1e\\x00\\x00\\x00\\x1e\\x00\\x00'\\
b'\\x00\\x1e\\x00\\x00\\x00\\x3e\\x00\\x00\\x00\\xfc\\xff\\x00\\x00\\xfc\\xff\\x00'\\
b'\\x00\\xf8\\xff\\x00\\x00\\xe0\\xff\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00'\\
b'\\x11\\x00\\x00\\xc0\\x07\\x00\\x00\\xf0\\x1f\\x00\\x00\\xf8\\x3f\\x00\\x00\\xfc'\\
b'\\x7f\\x00\\x00\\x7c\\x7c\\x00\\x00\\x3e\\xf8\\x00\\x00\\x1e\\xf0\\x00\\x00\\x1e'\\
b'\\xf0\\x00\\x00\\x1e\\xf0\\x00\\x00\\x3e\\xf8\\x00\\x00\\x7c\\x7c\\x00\\x00\\xfc'\\
b'\\x7f\\x00\\x00\\xf8\\x3f\\x00\\x00\\xf0\\x1f\\x00\\x00\\xc0\\x07\\x00\\x00\\x00'\\
b'\\x00\\x00\\x00\\x00\\x00\\x00\\x12\\x00\\x00\\xfe\\xff\\x7f\\x00\\xfe\\xff\\x7f'\\
b'\\x00\\xfe\\xff\\x7f\\x00\\xfe\\xff\\x7f\\x00\\x7c\\x7c\\x00\\x00\\x3c\\x78\\x00'\\
b'\\x00\\x1e\\xf0\\x00\\x00\\x1e\\xf0\\x00\\x00\\x1e\\xf0\\x00\\x00\\x1e\\xf0\\x00'\\
b'\\x00\\x3e\\xf8\\x00\\x00\\x7c\\x7c\\x00\\x00\\xfc\\x7f\\x00\\x00\\xf8\\x3f\\x00'\\
b'\\x00\\xf0\\x1f\\x00\\x00\\xc0\\x07\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00'\\
b'\\x11\\x00\\x00\\xc0\\x07\\x00\\x00\\xf0\\x1f\\x00\\x00\\xf8\\x3f\\x00\\x00\\xfc'\\
b'\\x7f\\x00\\x00\\x7e\\xfc\\x00\\x00\\x3e\\xf8\\x00\\x00\\x1e\\xf0\\x00\\x00\\x1e'\\
b'\\xf0\\x00\\x00\\x1e\\xf0\\x00\\x00\\x3c\\x78\\x00\\x00\\x7c\\x7c\\x00\\x00\\xfe'\\
b'\\xff\\x7f\\x00\\xfe\\xff\\x7f\\x00\\xfe\\xff\\x7f\\x00\\xfe\\xff\\x7f\\x00\\x00'\\
b'\\x00\\x00\\x00\\x00\\x00\\x00\\x0a\\x00\\x00\\xfe\\xff\\x00\\x00\\xfe\\xff\\x00'\\
b'\\x00\\xfe\\xff\\x00\\x00\\xfe\\xff\\x00\\x00\\x3c\\x00\\x00\\x00\\x1e\\x00\\x00'\\
b'\\x00\\x1e\\x00\\x00\\x00\\x0e\\x00\\x00\\x00\\x0e\\x00\\x00\\x00\\x00\\x00\\x00'\\
b'\\x0f\\x00\\x00\\x00\\x08\\x00\\x00\\x70\\x18\\x00\\x00\\xfc\\x38\\x00\\x00\\xfc'\\
b'\\x7d\\x00\\x00\\xfe\\xf9\\x00\\x00\\x9e\\xf1\\x00\\x00\\x9e\\xf1\\x00\\x00\\x9e'\\
b'\\xf1\\x00\\x00\\x9e\\xf3\\x00\\x00\\x3e\\xf3\\x00\\x00\\x3c\\x7f\\x00\\x00\\x3c'\\
b'\\x7f\\x00\\x00\\x38\\x3e\\x00\\x00\\x20\\x1c\\x00\\x00\\x00\\x00\\x00\\x09\\x00'\\
b'\\x00\\x0e\\x00\\x00\\x00\\x0e\\x00\\x00\\xfc\\xff\\x1f\\x00\\xfc\\xff\\x3f\\x00'\\
b'\\xfc\\xff\\x7f\\x00\\xfc\\xff\\xff\\x00\\x00\\x0e\\xf0\\x00\\x00\\x0e\\xf0\\x00'\\
b'\\x00\\x0e\\xf0\\x00\\x10\\x00\\x00\\xfe\\x0f\\x00\\x00\\xfe\\x3f\\x00\\x00\\xfe'\\
b'\\x7f\\x00\\x00\\xfe\\x7f\\x00\\x00\\x00\\xf8\\x00\\x00\\x00\\xf0\\x00\\x00\\x00'\\
b'\\xf0\\x00\\x00\\x00\\xf0\\x00\\x00\\x00\\x70\\x00\\x00\\x00\\x78\\x00\\x00\\xfe'\\
b'\\xff\\x00\\x00\\xfe\\xff\\x00\\x00\\xfe\\xff\\x00\\x00\\xfe\\xff\\x00\\x00\\x00'\\
b'\\x00\\x00\\x00\\x00\\x00\\x00\\x0f\\x00\\x00\\x06\\x00\\x00\\x00\\x3e\\x00\\x00'\\
b'\\x00\\xfe\\x00\\x00\\x00\\xfe\\x07\\x00\\x00\\xf8\\x3f\\x00\\x00\\xc0\\xff\\x00'\\
b'\\x00\\x00\\xfe\\x00\\x00\\x00\\xf0\\x00\\x00\\x00\\xfe\\x00\\x00\\xc0\\xff\\x00'\\
b'\\x00\\xf8\\x1f\\x00\\x00\\xfe\\x07\\x00\\x00\\xfe\\x00\\x00\\x00\\x1e\\x00\\x00'\\
b'\\x00\\x06\\x00\\x00\\x16\\x00\\x00\\x06\\x00\\x00\\x00\\x7e\\x00\\x00\\x00\\xfe'\\
b'\\x03\\x00\\x00\\xfe\\x1f\\x00\\x00\\xf0\\xff\\x00\\x00\\x00\\xff\\x00\\x00\\x00'\\
b'\\xf8\\x00\\x00\\x80\\xff\\x00\\x00\\xf8\\xff\\x00\\x00\\xfe\\x0f\\x00\\x00\\xfe'\\
b'\\x00\\x00\\x00\\xfe\\x00\\x00\\x00\\xfe\\x07\\x00\\x00\\xf8\\x7f\\x00\\x00\\x80'\\
b'\\xff\\x00\\x00\\x00\\xf8\\x00\\x00\\x00\\xff\\x00\\x00\\xf0\\xff\\x00\\x00\\xfe'\\
b'\\x3f\\x00\\x00\\xfe\\x03\\x00\\x00\\x7e\\x00\\x00\\x00\\x0e\\x00\\x00\\x0f\\x00'\\
b'\\x00\\x02\\x80\\x00\\x00\\x06\\xe0\\x00\\x00\\x1e\\xf0\\x00\\x00\\x3e\\xfc\\x00'\\
b'\\x00\\xfe\\x7e\\x00\\x00\\xf8\\x3f\\x00\\x00\\xe0\\x0f\\x00\\x00\\xe0\\x07\\x00'\\
b'\\x00\\xf8\\x1f\\x00\\x00\\xfc\\x7f\\x00\\x00\\x7e\\xfc\\x00\\x00\\x1e\\xf8\\x00'\\
b'\\x00\\x0e\\xe0\\x00\\x00\\x02\\xc0\\x00\\x00\\x00\\x80\\x00\\x0f\\x00\\x00\\x06'\\
b'\\x00\\x00\\x00\\x3e\\x00\\x00\\x00\\xfe\\x00\\x78\\x00\\xfe\\x07\\x78\\x00\\xf8'\\
b'\\x1f\\x7c\\x00\\xc0\\xff\\x7f\\x00\\x00\\xfe\\x3f\\x00\\x00\\xf0\\x1f\\x00\\x00'\\
b'\\xfe\\x07\\x00\\xc0\\xff\\x00\\x00\\xf8\\x1f\\x00\\x00\\xfe\\x07\\x00\\x00\\xfe'\\
b'\\x00\\x00\\x00\\x1e\\x00\\x00\\x00\\x06\\x00\\x00\\x0e\\x00\\x00\\x00\\xe0\\x00'\\
b'\\x00\\x1e\\xf0\\x00\\x00\\x1e\\xf8\\x00\\x00\\x1e\\xfc\\x00\\x00\\x1e\\xfe\\x00'\\
b'\\x00\\x1e\\xff\\x00\\x00\\x9e\\xf7\\x00\\x00\\xde\\xf3\\x00\\x00\\xfe\\xf1\\x00'\\
b'\\x00\\xfe\\xf0\\x00\\x00\\x7e\\xf0\\x00\\x00\\x3e\\xf0\\x00\\x00\\x1e\\xf0\\x00'\\
b'\\x00\\x00\\x00\\x00\\x0a\\x00\\x00\\x60\\x00\\x00\\x00\\xf0\\x00\\x00\\x00\\xf0'\\
b'\\x00\\x00\\xf8\\xff\\xff\\x01\\xfc\\xff\\xff\\x03\\xfe\\x9f\\xff\\x07\\xfe\\x0f'\\
b'\\xff\\x07\\x0e\\x00\\x00\\x07\\x0e\\x00\\x00\\x07\\x00\\x00\\x00\\x00\\x08\\x00'\\
b'\\xfc\\xff\\xff\\x00\\xfc\\xff\\xff\\x00\\xfc\\xff\\xff\\x00\\xfc\\xff\\xff\\x00'\\
b'\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00'\\
b'\\x09\\x00\\x0e\\x00\\x00\\x07\\x0e\\x00\\x00\\x07\\xfe\\x0f\\xff\\x07\\xfe\\x9f'\\
b'\\xff\\x07\\xfc\\xff\\xff\\x03\\xf8\\xff\\xff\\x01\\x00\\xf0\\x00\\x00\\x00\\xf0'\\
b'\\x00\\x00\\x00\\x60\\x00\\x00\\x0c\\x00\\x30\\x00\\x00\\x00\\x38\\x00\\x00\\x00'\\
b'\\x18\\x00\\x00\\x00\\x18\\x00\\x00\\x00\\x18\\x00\\x00\\x00\\x30\\x00\\x00\\x00'\\
b'\\x30\\x00\\x00\\x00\\x30\\x00\\x00\\x00\\x38\\x00\\x00\\x00\\x18\\x00\\x00\\x00'\\
b'\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00'

_index =\\
b'\\x00\\x00\\x3e\\x00\\x64\\x00\\x86\\x00\\xb0\\x00\\xee\\x00\\x28\\x01\\x86\\x01'\\
b'\\xd4\\x01\\xea\\x01\\x10\\x02\\x36\\x02\\x64\\x02\\xa2\\x02\\xbc\\x02\\xe2\\x02'\\
b'\\xfc\\x02\\x26\\x03\\x6c\\x03\\x92\\x03\\xd4\\x03\\x16\\x04\\x58\\x04\\x96\\x04'\\
b'\\xd8\\x04\\x12\\x05\\x54\\x05\\x96\\x05\\xb0\\x05\\xca\\x05\\xfc\\x05\\x36\\x06'\\
b'\\x68\\x06\\xa6\\x06\\x00\\x07\\x4e\\x07\\x98\\x07\\xea\\x07\\x38\\x08\\x7e\\x08'\\
b'\\xc0\\x08\\x16\\x09\\x68\\x09\\x86\\x09\\xc4\\x09\\x0e\\x0a\\x50\\x0a\\xb2\\x0a'\\
b'\\x04\\x0b\\x5e\\x0b\\xa8\\x0b\\xfe\\x0b\\x48\\x0c\\x92\\x0c\\xd0\\x0c\\x1a\\x0d'\\
b'\\x60\\x0d\\xc6\\x0d\\x0c\\x0e\\x56\\x0e\\x9c\\x0e\\xc2\\x0e\\xec\\x0e\\x12\\x0f'\\
b'\\x50\\x0f\\xae\\x0f\\xe0\\x0f\\x26\\x10\\x70\\x10\\xb2\\x10\\xfc\\x10\\x3e\\x11'\\
b'\\x64\\x11\\xaa\\x11\\xec\\x11\\x0a\\x12\\x24\\x12\\x66\\x12\\x84\\x12\\xee\\x12'\\
b'\\x30\\x13\\x76\\x13\\xc0\\x13\\x06\\x14\\x30\\x14\\x6e\\x14\\x94\\x14\\xd6\\x14'\\
b'\\x14\\x15\\x6e\\x15\\xac\\x15\\xea\\x15\\x24\\x16\\x4e\\x16\\x70\\x16\\x96\\x16'\\
b'\\xc8\\x16'

_mvfont = memoryview(_font)

def _chr_addr(ordch):
    offset = 2 * (ordch - 32)
    return int.from_bytes(_index[offset:offset + 2], 'little')
    
def get_width(s):
    width = 0
    for ch in s:
        ordch = ord(ch)
        ordch = ordch + 1 if ordch >= 32 and ordch <= 126 else 32
        offset = _chr_addr(ordch)
        width += int.from_bytes(_font[offset:offset + 2], 'little')
    return width

def get_ch(ch):
    ordch = ord(ch)
    ordch = ordch + 1 if ordch >= 32 and ordch <= 126 else 32
    offset = _chr_addr(ordch)
    width = int.from_bytes(_font[offset:offset + 2], 'little')
    next_offs = _chr_addr(ordch +1)
    return _mvfont[offset + 2:next_offs], width


_RDDSDR = const(0x0f) # Read Display Self-Diagnostic Result
_SLPOUT = const(0x11) # Sleep Out
_GAMSET = const(0x26) # Gamma Set
_DISPOFF = const(0x28) # Display Off
_DISPON = const(0x29) # Display On
_CASET = const(0x2a) # Column Address Set
_PASET = const(0x2b) # Page Address Set
_RAMWR = const(0x2c) # Memory Write
_RAMRD = const(0x2e) # Memory Read
_MADCTL = const(0x36) # Memory Access Control
_VSCRSADD = const(0x37) # Vertical Scrolling Start Address
_PIXSET = const(0x3a) # Pixel Format Set
_PWCTRLA = const(0xcb) # Power Control A
_PWCRTLB = const(0xcf) # Power Control B
_DTCTRLA = const(0xe8) # Driver Timing Control A
_DTCTRLB = const(0xea) # Driver Timing Control B
_PWRONCTRL = const(0xed) # Power on Sequence Control
_PRCTRL = const(0xf7) # Pump Ratio Control
_PWCTRL1 = const(0xc0) # Power Control 1
_PWCTRL2 = const(0xc1) # Power Control 2
_VMCTRL1 = const(0xc5) # VCOM Control 1
_VMCTRL2 = const(0xc7) # VCOM Control 2
_FRMCTR1 = const(0xb1) # Frame Rate Control 1
_DISCTRL = const(0xb6) # Display Function Control
_ENA3G = const(0xf2) # Enable 3G
_PGAMCTRL = const(0xe0) # Positive Gamma Control
_NGAMCTRL = const(0xe1) # Negative Gamma Control

_CHUNK = const(1024) #maximum number of pixels per spi write

def color565(r, g, b):
    return (r & 0xf8) << 8 | (g & 0xfc) << 3 | b >> 3

class Display:

    def __init__(self, dc=Pin(14), cs=Pin(15), rst=Pin(13), w=240, h=320, r = 2):
        self.spi = SPI(1, baudrate=40000000, sck=Pin(10), mosi=Pin(11))
        self.cs = cs
        self.dc = dc
        self.rst = rst
        self._init_width = w
        self._init_height = h
        self.width = w
        self.height = h
        self.rotation = r
        self.cs.init(self.cs.OUT, value=1)
        self.dc.init(self.dc.OUT, value=0)
        self.rst.init(self.rst.OUT, value=0)
        self.reset()
        self.init()
        self._scroll = 0
        self._buf = bytearray(_CHUNK * 2)
        self._colormap = bytearray(b'\\x00\\x00\\xFF\\xFF') #default white foregraound, black background
        self._x = 40
        self._y = 10
        self._font = _font
        self.scrolling = False

    def set_color(self,fg,bg):
        self._colormap[0] = bg>>8
        self._colormap[1] = bg & 255
        self._colormap[2] = fg>>8
        self._colormap[3] = fg & 255

    def set_pos(self,x,y):
        self._x = x
        self._y = y

    def reset_scroll(self):
        self.scrolling = False
        self._scroll = 0
        self.scroll(0)

    def set_font(self, font):
        self._font = font

    def init(self):
        for command, data in (
            (_RDDSDR, b"\\x03\\x80\\x02"),
            (_PWCRTLB, b"\\x00\\xc1\\x30"),
            (_PWRONCTRL, b"\\x64\\x03\\x12\\x81"),
            (_DTCTRLA, b"\\x85\\x00\\x78"),
            (_PWCTRLA, b"\\x39\\x2c\\x00\\x34\\x02"),
            (_PRCTRL, b"\\x20"),
            (_DTCTRLB, b"\\x00\\x00"),
            (_PWCTRL1, b"\\x23"),
            (_PWCTRL2, b"\\x10"),
            (_VMCTRL1, b"\\x3e\\x28"),
            (_VMCTRL2, b"\\x86")):
            self._write(command, data)

        if self.rotation == 0:                  # 0 deg
            self._write(_MADCTL, b"\\x48")
            self.width = self._init_height
            self.height = self._init_width
        elif self.rotation == 1:                # 90 deg
            self._write(_MADCTL, b"\\x28")
            self.width = self._init_width
            self.height = self._init_height
        elif self.rotation == 2:                # 180 deg
            self._write(_MADCTL, b"\\x88")
            self.width = self._init_height
            self.height = self._init_width
        elif self.rotation == 3:                # 270 deg
            self._write(_MADCTL, b"\\xE8")
            self.width = self._init_width
            self.height = self._init_height
        elif self.rotation == 4:                # Mirrored + 0 deg
            self._write(_MADCTL, b"\\xC8")
            self.width = self._init_height
            self.height = self._init_width
        elif self.rotation == 5:                # Mirrored + 90 deg
            self._write(_MADCTL, b"\\x68")
            self.width = self._init_width
            self.height = self._init_height
        elif self.rotation == 6:                # Mirrored + 180 deg
            self._write(_MADCTL, b"\\x08")
            self.width = self._init_height
            self.height = self._init_width
        elif self.rotation == 7:                # Mirrored + 270 deg
            self._write(_MADCTL, b"\\xA8")
            self.width = self._init_width
            self.height = self._init_height
        else:
            self._write(_MADCTL, b"\\x08")

        for command, data in (
            (_PIXSET, b"\\x55"),
            (_FRMCTR1, b"\\x00\\x18"),
            (_DISCTRL, b"\\x08\\x82\\x27"),
            (_ENA3G, b"\\x00"),
            (_GAMSET, b"\\x01"),
            (_PGAMCTRL, b"\\x0f\\x31\\x2b\\x0c\\x0e\\x08\\x4e\\xf1\\x37\\x07\\x10\\x03\\x0e\\x09\\x00"),
            (_NGAMCTRL, b"\\x00\\x0e\\x14\\x03\\x11\\x07\\x31\\xc1\\x48\\x08\\x0f\\x0c\\x31\\x36\\x0f")):
            self._write(command, data)
        self._write(_SLPOUT)
        sleep_ms(120)
        self._write(_DISPON)

    def reset(self):
        self.rst(0)
        sleep_ms(50)
        self.rst(1)
        sleep_ms(50)

    def _write(self, command, data=None):
        self.dc(0)
        self.cs(0)
        self.spi.write(bytearray([command]))
        self.cs(1)
        if data is not None:
            self._data(data)

    def _data(self, data):
        self.dc(1)
        self.cs(0)
        self.spi.write(data)
        self.cs(1)

    def _writeblock(self, x0, y0, x1, y1, data=None):
        self._write(_CASET, ustruct.pack(">HH", x0, x1))
        self._write(_PASET, ustruct.pack(">HH", y0, y1))
        self._write(_RAMWR, data)

    def _readblock(self, x0, y0, x1, y1, data=None):
        self._write(_CASET, ustruct.pack(">HH", x0, x1))
        self._write(_PASET, ustruct.pack(">HH", y0, y1))
        if data is None:
            return self._read(_RAMRD, (x1 - x0 + 1) * (y1 - y0 + 1) * 3)

    def _read(self, command, count):
        self.dc(0)
        self.cs(0)
        self.spi.write(bytearray([command]))
        data = self.spi.read(count)
        self.cs(1)
        return data

    def pixel(self, x, y, color=None):
        if color is None:
            r, b, g = self._readblock(x, y, x, y)
            return color565(r, g, b)
        if not 0 <= x < self.width or not 0 <= y < self.height:
            return
        self._writeblock(x, y, x, y, ustruct.pack(">H", color))

    def fill_rectangle(self, x, y, w, h, color=None):
        x = min(self.width - 1, max(0, x))
        y = min(self.height - 1, max(0, y))
        w = min(self.width - x, max(1, w))
        h = min(self.height - y, max(1, h))
        if color:
            color = ustruct.pack(">H", color)
        else:
            color = self._colormap[0:2] #background
        for i in range(_CHUNK):
            self._buf[2*i]=color[0]; self._buf[2*i+1]=color[1]
        chunks, rest = divmod(w * h, _CHUNK)
        self._writeblock(x, y, x + w - 1, y + h - 1, None)
        if chunks:
            for count in range(chunks):
                self._data(self._buf)
        if rest != 0:
            mv = memoryview(self._buf)
            self._data(mv[:rest*2])

    def erase(self, x=0, y=0, w=320, h=240):
        self.fill_rectangle(x, y, w, h)

    def blit(self, bitbuff, x, y, w, h):
        x = min(self.width - 1, max(0, x))
        y = min(self.height - 1, max(0, y))
        w = min(self.width - x, max(1, w))
        h = min(self.height - y, max(1, h))
        chunks, rest = divmod(w * h, _CHUNK)
        self._writeblock(x, y, x + w - 1, y + h - 1, None)
        written = 0
        for iy in range(h):
            for ix in range(w):
                index = ix+iy*w - written
                if index >=_CHUNK:
                    self._data(self._buf)
                    written += _CHUNK
                    index   -= _CHUNK
                c = bitbuff.pixel(ix,iy)
                self._buf[index*2] = self._colormap[c*2]
                self._buf[index*2+1] = self._colormap[c*2+1]
        rest = w*h - written
        if rest != 0:
            mv = memoryview(self._buf)
            self._data(mv[:rest*2])

    def chars(self, str, x, y):
        str_w  = get_width(str)
        div, rem = divmod(font_height,8)
        nbytes = div+1 if rem else div
        buf = bytearray(str_w * nbytes)
        pos = 0
        for ch in str:
            glyph, char_w = get_ch(ch)
            for row in range(nbytes):
                index = row*str_w + pos
                for i in range(char_w):
                    buf[index+i] = glyph[nbytes*i+row]
            pos += char_w
        fb = framebuf.FrameBuffer(buf,str_w, font_height, framebuf.MONO_VLSB)
        self.blit(fb,x,y,str_w,font_height)
        return x+str_w

    def scroll(self, dy):
        self._scroll = (self._scroll + dy) % self.height
        #self._write(_VSCRSADD, ustruct.pack(">H", self._scroll))

    def next_line(self, cury, char_h):
        global scrolling
        if not self.scrolling:
            res = cury + char_h
            self.scrolling = (res >= self.height)
        if self.scrolling:
            self.scroll(char_h)
            res = (self.height - char_h + self._scroll)%self.height
            self.fill_rectangle(0, res, self.width, self.height - res)
        return res

    def write(self, text): #does character wrap, compatible with stream output
        curx = self._x; cury = self._y
        char_h = font_height
        width = 0
        written = 0
        for pos, ch in enumerate(text):
            if ch == '\\n':
                if pos>0:
                    self.chars(text[written:pos],curx,cury)
                curx = 0; written = pos+1; width = 0
                cury = self.next_line(cury,char_h)
            else:
                char_w = get_width(ch)
                if curx + width + char_w >= self.width:
                    self.chars(text[written:pos], curx,cury)
                    curx = 0 ; written = pos; width = char_h
                    cury = self.next_line(cury,char_h)
                else:
                    width += char_w
        if written<len(text):
            curx = self.chars(text[written:], curx,cury)
        self._x = curx; self._y = cury


    def print(self, text): #does word wrap, leaves self._x unchanged
        cury = self._y; curx = self._x
        char_h = font_height
        char_w = font_max_width
        lines = text.split('\\n')
        for line in lines:
            words = line.split(' ')
            for word in words:
                if curx + get_width(word) >= self.width:
                    curx = self._x; cury = self.next_line(cury,char_h)
                    while get_width(word) > self.width:
                        self.chars(word[:self.width//char_w],curx,cury)
                        word = word[self.width//char_w:]
                        cury = self.next_line(cury,char_h)
                if len(word)>0:
                    curx = self.chars(word+' ', curx,cury)
            curx = self._x; cury = self.next_line(cury,char_h)
        self._y = cury


disp = 0

def display(x):
    global disp
    if not disp:
        disp = Display()
        disp.init()
        disp.erase()
        disp.print(">>> "+str(x))
        print(x)
    else:
        disp.print(">>> "+str(x))
        print(x)

def clear():
    global disp
    if not disp:
        disp = Display()
        disp.init()
        disp.erase()
    else:
        disp.erase()
###############################################################################
# EXCEPTIONS
###############################################################################

class PWMChannelAlreadyInUse(Exception):
    pass

class EventFailedScheduleQueueFull(Exception):
    pass

###############################################################################
# SUPPORTING CLASSES
###############################################################################

def clamp(n, low, high): return max(low, min(n, high))

def pinout(output=True):
    pins = """        ---usb---
GP0  1  |o     o| -1  VBUS
GP1  2  |o     o| -2  VSYS
GND  3  |o     o| -3  GND
GP2  4  |o     o| -4  3V3_EN
GP3  5  |o     o| -5  3V3(OUT)
GP4  6  |o     o| -6           ADC_VREF
GP5  7  |o     o| -7  GP28     ADC2
GND  8  |o     o| -8  GND      AGND
GP6  9  |o     o| -9  GP27     ADC1
GP7  10 |o     o| -10 GP26     ADC0
GP8  11 |o     o| -11 RUN
GP9  12 |o     o| -12 GP22
GND  13 |o     o| -13 GND
GP10 14 |o     o| -14 GP21
GP11 15 |o     o| -15 GP20
GP12 16 |o     o| -16 GP19
GP13 17 |o     o| -17 GP18
GND  18 |o     o| -18 GND
GP14 19 |o     o| -19 GP17
GP15 20 |o     o| -20 GP16
        ---------"""

    if output:
        print(pins)
    return pins

class PinMixin:
    @property
    def pin(self):
        return self._pin_num

    def __str__(self):
        return "{} (pin {})".format(self.__class__.__name__, self._pin_num)

class PinsMixin:

    @property
    def pins(self):
        return self._pin_nums

    def __str__(self):
        return "{} (pins - {})".format(self.__class__.__name__, self._pin_nums)
        
class ValueChange:
    def __init__(self, output_device, generator, n, wait):
        self._output_device = output_device
        self._generator = generator
        self._n = n

        self._gen = self._generator()
        
        self._timer = Timer()
        self._running = True
        self._wait = wait
        
        self._set_value()
            
    def _set_value(self, timer_obj=None):
        if self._wait:
            # wait for the exection to end
            next_seq = self._get_value()
            while next_seq is not None:
                value, seconds = next_seq
                
                self._output_device._write(value)
                sleep(seconds)
                
                next_seq = self._get_value()
                
        else:
            # run the timer
            next_seq = self._get_value()
            if next_seq is not None:
                value, seconds = next_seq
                
                self._output_device._write(value)            
                self._timer.init(period=int(seconds * 1000), mode=Timer.ONE_SHOT, callback=self._set_value)

        if next_seq is None:
            # the sequence has finished, turn the device off
            self._output_device.off()
            self._running = False
                
    def _get_value(self):
        try:
            return next(self._gen)
            
        except StopIteration:
            
            self._n = self._n - 1 if self._n is not None else None
            if self._n == 0:
                # it's the end, return None
                return None
            else:
                # recreate the generator and start again
                self._gen = self._generator()
                return next(self._gen)
        
    def stop(self):
        self._running = False
        self._timer.deinit()

###############################################################################
# OUTPUT DEVICES
###############################################################################

class OutputDevice:  
    def __init__(self, active_high=True, initial_value=False):
        self.active_high = active_high
        if initial_value is not None:
            self._write(initial_value)
        self._value_changer = None
    
    @property
    def active_high(self):
        return self._active_state

    @active_high.setter
    def active_high(self, value):
        self._active_state = True if value else False
        self._inactive_state = False if value else True
        
    @property
    def value(self):
        return self._read()

    @value.setter
    def value(self, value):
        self._stop_change()
        self._write(value)
        
    def on(self, value=1, t=None, wait=False):
        if t is None:
            self.value = value
        else:
            self._start_change(lambda : iter([(value, t), ]), 1, wait)

    def off(self):
        self.value = 0
            
    @property
    def is_active(self):
        return bool(self.value)

    def toggle(self):
        if self.is_active:
            self.off()
        else:
            self.on()
            
    def blink(self, on_time=1, off_time=None, n=None, wait=False):
        off_time = on_time if off_time is None else off_time
        
        self.off()

        # is there anything to change?
        if on_time > 0 or off_time > 0:
            self._start_change(lambda : iter([(1,on_time), (0,off_time)]), n, wait)
            
    def _start_change(self, generator, n, wait):
        self._value_changer = ValueChange(self, generator, n, wait)
    
    def _stop_change(self):
        if self._value_changer is not None:
            self._value_changer.stop()
            self._value_changer = None

    def close(self):
        self.value = 0

class DigitalOutputDevice(OutputDevice, PinMixin):
    def __init__(self, pin, active_high=True, initial_value=False):
        self._pin_num = pin
        self._pin = Pin(pin, Pin.OUT)
        super().__init__(active_high, initial_value)
        
    def _value_to_state(self, value):
        return int(self._active_state if value else self._inactive_state)
    
    def _state_to_value(self, state):
        return int(bool(state) == self._active_state)
    
    def _read(self):
        return self._state_to_value(self._pin.value())

    def _write(self, value):
        self._pin.value(self._value_to_state(value))
                
    def close(self):
        super().close()
        self._pin = None

class DigitalLED(DigitalOutputDevice):
    pass

DigitalLED.is_lit = DigitalLED.is_active

class Buzzer(DigitalOutputDevice):
    pass

Buzzer.beep = Buzzer.blink

class PWMOutputDevice(OutputDevice, PinMixin):
    
    PIN_TO_PWM_CHANNEL = ["0A","0B","1A","1B","2A","2B","3A","3B","4A","4B","5A","5B","6A","6B","7A","7B","0A","0B","1A","1B","2A","2B","3A","3B","4A","4B","5A","5B","6A","6B"]
    _channels_used = {}
    
    def __init__(self, pin, freq=100, duty_factor=65535, active_high=True, initial_value=False):
        self._check_pwm_channel(pin)
        self._pin_num = pin
        self._duty_factor = duty_factor
        self._pwm = PWM(Pin(pin))
        self._pwm.freq(freq)
        super().__init__(active_high, initial_value)
        
    def _check_pwm_channel(self, pin_num):
        channel = PWMOutputDevice.PIN_TO_PWM_CHANNEL[pin_num]
        if channel in PWMOutputDevice._channels_used.keys():
            raise PWMChannelAlreadyInUse(
                "PWM channel {} is already in use by {}. Use a different pin".format(
                    channel,
                    str(PWMOutputDevice._channels_used[channel])
                    )
                )
        else:
            PWMOutputDevice._channels_used[channel] = self
        
    def _state_to_value(self, state):
        return (state if self.active_high else self._duty_factor - state) / self._duty_factor

    def _value_to_state(self, value):
        return int(self._duty_factor * (value if self.active_high else 1 - value))
    
    def _read(self):
        return self._state_to_value(self._pwm.duty_u16())
    
    def _write(self, value):
        self._pwm.duty_u16(self._value_to_state(value))
        
    @property
    def is_active(self):
        return self.value != 0

    @property
    def freq(self):
        return self._pwm.freq()
    
    @freq.setter
    def freq(self, freq):
        self._pwm.freq(freq)

    def blink(self, on_time=1, off_time=None, n=None, wait=False, fade_in_time=0, fade_out_time=None, fps=25):
        self.off()
        
        off_time = on_time if off_time is None else off_time
        fade_out_time = fade_in_time if fade_out_time is None else fade_out_time
        
        def blink_generator():
            if fade_in_time > 0:
                for s in [
                    (i * (1 / fps) / fade_in_time, 1 / fps)
                    for i in range(int(fps * fade_in_time))
                    ]:
                    yield s
            
            if on_time > 0:
                yield (1, on_time)

            if fade_out_time > 0:
                for s in [
                    (1 - (i * (1 / fps) / fade_out_time), 1 / fps)
                    for i in range(int(fps * fade_out_time))
                    ]:
                    yield s
            
            if off_time > 0:
                yield (0, off_time)
        
        # is there anything to change?
        if on_time > 0 or off_time > 0 or fade_in_time > 0 or fade_out_time > 0:
            self._start_change(blink_generator, n, wait)

    def pulse(self, fade_in_time=1, fade_out_time=None, n=None, wait=False, fps=25):
        self.blink(on_time=0, off_time=0, fade_in_time=fade_in_time, fade_out_time=fade_out_time, n=n, wait=wait, fps=fps)

    def close(self):
        super().close()
        del PWMOutputDevice._channels_used[
            PWMOutputDevice.PIN_TO_PWM_CHANNEL[self._pin_num]
            ]
        self._pwm.deinit()
        self._pwm = None
    
class PWMLED(PWMOutputDevice):
    """
    Represents an LED driven by a PWM pin; the brightness of the LED can be changed.

    :param int pin:
        The pin that the device is connected to.

    :param int freq:
        The frequency of the PWM signal in hertz. Defaults to 100.

    :param int duty_factor:
        The duty factor of the PWM signal. This is a value between 0 and 65535.
        Defaults to 65535.

    :param bool active_high:
        If :data:\`True\` (the default), the :meth:\`on\` method will set the Pin
        to HIGH. If :data:\`False\`, the :meth:\`on\` method will set the Pin to
        LOW (the :meth:\`off\` method always does the opposite).

    :param bool initial_value:
        If :data:\`False\` (the default), the LED will be off initially. If
        :data:\`True\`, the LED will be switched on initially.
    """
PWMLED.brightness = PWMLED.value
def LED(pin, pwm=True, active_high=True, initial_value=False):
    if pwm:
        return PWMLED(
            pin=pin,
            active_high=active_high,
            initial_value=initial_value)
    else:
        return DigitalLED(
            pin=pin,
            active_high=active_high,
            initial_value=initial_value)

try:
    pico_led = LED("LED", pwm=False)
except TypeError:
    # older version of micropython before "LED" was supported
    pico_led = LED(25, pwm=False)

class PWMBuzzer(PWMOutputDevice):  
    def __init__(self, pin, freq=440, duty_factor=1023, active_high=True, initial_value=False):
        super().__init__(pin, freq, duty_factor, active_high, initial_value)

PWMBuzzer.volume = PWMBuzzer.value
PWMBuzzer.beep = PWMBuzzer.blink

class Speaker(OutputDevice, PinMixin):   
    NOTES = {
        'b0': 31, 'c1': 33, 'c#1': 35, 'd1': 37, 'd#1': 39, 'e1': 41, 'f1': 44, 'f#1': 46, 'g1': 49,'g#1': 52, 'a1': 55,
        'a#1': 58, 'b1': 62, 'c2': 65, 'c#2': 69, 'd2': 73, 'd#2': 78,
        'e2': 82, 'f2': 87, 'f#2': 93, 'g2': 98, 'g#2': 104, 'a2': 110, 'a#2': 117, 'b2': 123,
        'c3': 131, 'c#3': 139, 'd3': 147, 'd#3': 156, 'e3': 165, 'f3': 175, 'f#3': 185, 'g3': 196, 'g#3': 208, 'a3': 220, 'a#3': 233, 'b3': 247,
        'c4': 262, 'c#4': 277, 'd4': 294, 'd#4': 311, 'e4': 330, 'f4': 349, 'f#4': 370, 'g4': 392, 'g#4': 415, 'a4': 440, 'a#4': 466, 'b4': 494,
        'c5': 523, 'c#5': 554, 'd5': 587, 'd#5': 622, 'e5': 659, 'f5': 698, 'f#5': 740, 'g5': 784, 'g#5': 831, 'a5': 880, 'a#5': 932, 'b5': 988,
        'c6': 1047, 'c#6': 1109, 'd6': 1175, 'd#6': 1245, 'e6': 1319, 'f6': 1397, 'f#6': 1480, 'g6': 1568, 'g#6': 1661, 'a6': 1760, 'a#6': 1865, 'b6': 1976,
        'c7': 2093, 'c#7': 2217, 'd7': 2349, 'd#7': 2489,
        'e7': 2637, 'f7': 2794, 'f#7': 2960, 'g7': 3136, 'g#7': 3322, 'a7': 3520, 'a#7': 3729, 'b7': 3951,
        'c8': 4186, 'c#8': 4435, 'd8': 4699, 'd#8': 4978 
        }
    
    def __init__(self, pin, initial_freq=440, initial_volume=0, duty_factor=1023, active_high=True):
        
        self._pin_num = pin
        self._pwm_buzzer = PWMBuzzer(
            pin,
            freq=initial_freq,
            duty_factor=duty_factor,
            active_high=active_high,
            initial_value=None,
            )
        
        super().__init__(active_high, None)
        self.volume = initial_volume
        
    def on(self, volume=1):
        self.volume = volume
        
    def off(self):
        self.volume = 0

    @property
    def value(self):
        return tuple(self.freq, self.volume)

    @value.setter
    def value(self, value):
        self._stop_change()
        self._write(value)

    @property
    def volume(self):
        return self._volume

    @volume.setter
    def volume(self, value):
        self._volume = value
        self.value = (self.freq, self.volume)
        
    @property
    def freq(self):
        return self._pwm_buzzer.freq
    
    @freq.setter
    def freq(self, freq):
        self.value = (freq, self.volume)
        
    def _write(self, value):
        # set the frequency
        if value[0] is not None:
            self._pwm_buzzer.freq = value[0]
        
        # write the volume value
        if value[1] is not None:
            self._pwm_buzzer.volume = value[1]

    def _to_freq(self, freq):
        if freq is not None and freq != '' and freq != 0: 
            if type(freq) is str:
                return int(self.NOTES[freq])
            elif freq <= 128 and freq > 0: # MIDI
                midi_factor = 2**(1/12)
                return int(440 * midi_factor ** (freq - 69))
            else:
                return freq
        else:
            return None

    def beep(self, on_time=1, off_time=None, n=None, wait=False, fade_in_time=0, fade_out_time=None, fps=25):
        self._pwm_buzzer.blink(on_time, off_time, n, wait, fade_in_time, fade_out_time, fps)

    def play(self, tune=440, duration=1, volume=1, n=1, wait=True):

        self.off()

        # tune isn't a list, so it must be a single frequency or note
        if not isinstance(tune, (list, tuple)):
            tune = [(tune, duration)]
        # if the first element isn't a list, then it must be list of a single note and duration
        elif not isinstance(tune[0], (list, tuple)):
            tune = [tune]

        def tune_generator():
            for note in tune:
                
                # note isn't a list or tuple, it must be a single frequency or note
                if not isinstance(note, (list, tuple)):
                    # make it into a tuple
                    note = (note, duration)

                # turn the notes into frequencies
                freq = self._to_freq(note[0])
                freq_duration = note[1]
                freq_volume = volume if freq is not None else 0
                
                # if this is a tune of greater than 1 note, add gaps between notes
                if len(tune) == 1:
                    yield ((freq, freq_volume), freq_duration)
                else:
                    yield ((freq, freq_volume), freq_duration * 0.9)
                    yield ((freq, 0), freq_duration * 0.1)
                    
        self._start_change(tune_generator, n, wait)

    def close(self):
        self._pwm_buzzer.close()


class Servo(PWMOutputDevice):
    def __init__(self, pin, initial_value=None, min_pulse_width=1/1000, max_pulse_width=2/1000, frame_width=20/1000, duty_factor=65535):
        self._min_duty = int((min_pulse_width / frame_width) * duty_factor)
        self._max_duty = int((max_pulse_width / frame_width) * duty_factor)
        
        super().__init__(pin, freq=int(1 / frame_width), duty_factor=duty_factor, initial_value=initial_value)
        
    def _state_to_value(self, state):
        return None if state == 0 else clamp((state - self._min_duty) / (self._max_duty - self._min_duty), 0, 1)
        
    def _value_to_state(self, value):
        return 0 if value is None else int(self._min_duty + ((self._max_duty - self._min_duty) * value))
    
    def min(self):
        self.value = 0
    
    def mid(self):
        self.value = 0.5
        
    def max(self):
        self.value = 1

    def off(self):
        self.value = None

###############################################################################
# INPUT DEVICES
###############################################################################

class InputDevice:
    
    def __init__(self, active_state=None):
        self._active_state = active_state

    @property
    def active_state(self):
        
        return self._active_state

    @active_state.setter
    def active_state(self, value):
        self._active_state = True if value else False
        self._inactive_state = False if value else True
        
    @property
    def value(self):
        
        return self._read()

class DigitalInputDevice(InputDevice, PinMixin):
    def __init__(self, pin, pull_up=False, active_state=None, bounce_time=None):
        super().__init__(active_state)
        self._pin_num = pin
        self._pin = Pin(
            pin,
            mode=Pin.IN,
            pull=Pin.PULL_UP if pull_up else Pin.PULL_DOWN)
        self._bounce_time = bounce_time
        
        if active_state is None:
            self._active_state = False if pull_up else True
        else:
            self._active_state = active_state
        
        self._state = self._pin.value()
        
        self._when_activated = None
        self._when_deactivated = None
        
        # setup interupt
        self._pin.irq(self._pin_change, Pin.IRQ_RISING | Pin.IRQ_FALLING)
        
    def _state_to_value(self, state):
        return int(bool(state) == self._active_state)
    
    def _read(self):
        return self._state_to_value(self._state)

    def _pin_change(self, p):
        # turn off the interupt
        p.irq(handler=None)
        
        last_state = p.value()
        
        if self._bounce_time is not None:
            # wait for stability
            stop = ticks_ms() + (self._bounce_time * 1000)
            while ticks_ms() < stop:
                # keep checking, reset the stop if the value changes
                if p.value() != last_state:
                    stop = ticks_ms() + self._bounce_time
                    last_state = p.value()
        
        # re-enable the interupt
        p.irq(self._pin_change, Pin.IRQ_RISING | Pin.IRQ_FALLING)
        
        # did the value actually change? 
        if self._state != last_state:
            # set the state
            self._state = self._pin.value()
            
            # manage call backs
            callback_to_run = None
            if self.value and self._when_activated is not None:
                callback_to_run = self._when_activated
                    
            elif not self.value and self._when_deactivated is not None:
                callback_to_run = self._when_deactivated
            
            if callback_to_run is not None:
                
                def schedule_callback(callback):
                    callback()
            
                try:
                    schedule(schedule_callback, callback_to_run)
                    
                except RuntimeError as e:
                    if str(e) == "schedule queue full":
                        raise EventFailedScheduleQueueFull(
                            "{} - {} not run due to the micropython schedule being full".format(
                                str(self), callback_to_run.__name__))
                    else:
                        raise e

    @property
    def is_active(self):
        return bool(self.value)

    @property
    def is_inactive(self):
        return not bool(self.value)
    
    @property
    def when_activated(self):
        return self._when_activated
    
    @when_activated.setter
    def when_activated(self, value):
        self._when_activated = value
        
    @property
    def when_deactivated(self):
        return self._when_deactivated
    
    @when_deactivated.setter
    def when_deactivated(self, value):
        self._when_deactivated = value
    
    def close(self):
        self._pin.irq(handler=None)
        self._pin = None

class Switch(DigitalInputDevice):
    def __init__(self, pin, pull_up=False, bounce_time=0.02): 
        super().__init__(pin=pin, pull_up=pull_up, bounce_time=bounce_time)

Switch.is_closed = Switch.is_active
Switch.is_open = Switch.is_inactive
Switch.when_closed = Switch.when_activated
Switch.when_opened = Switch.when_deactivated

class Button(Switch):
    pass

Button.is_pressed = Button.is_active
Button.is_released = Button.is_inactive
Button.when_pressed = Button.when_activated
Button.when_released = Button.when_deactivated 

class AnalogInputDevice(InputDevice, PinMixin):
    def __init__(self, pin, active_state=True, threshold=0.5):
        self._pin_num = pin
        super().__init__(active_state)
        self._adc = ADC(pin)
        self._threshold = float(threshold)
        
    def _state_to_value(self, state):
        return (state if self.active_state else 65535 - state) / 65535

    def _value_to_state(self, value):
        return int(65535 * (value if self.active_state else 1 - value))
    
    def _read(self):
        return self._state_to_value(self._adc.read_u16())
        
    @property
    def threshold(self):
        return self._threshold

    @threshold.setter
    def threshold(self, value):
        self._threshold = float(value)

    @property
    def is_active(self):
        """
        Returns :data:\`True\` if the device is active.
        """
        return self.value > self.threshold

    @property
    def voltage(self):
        """
        Returns the voltage of the analogue device.
        """
        return self.value * 3.3

    def close(self):
        self._adc = None

class Potentiometer(AnalogInputDevice):
    
    pass

Pot = Potentiometer
`,G=b(E()),d=b(!1),m=b(!1),v=b(),N=b(!1),y=b(!1);function E(){return/(iPad|iPhone|iPod)/g.test(navigator.userAgent)?(console.error("WebSerial is not available on iOS"),!1):window.isSecureContext?"serial"in navigator||"usb"in navigator?!0:(console.error("Try Chrome, Edge, Opera, Brave","WebSerial and WebUSB are not supported"),!1):(console.error("WebSerial cannot be accessed with unsecure connection"),!1)}async function W(){let t;if(t=new O,!!E()){try{await t.requestAccess()}catch(x){v.value=x;return}return t}}async function U(){N.value=!1;let t=await W();if(!t)return;try{await t.connect(),y.value=!0}catch(e){v.value=e,m.value=!0;return}t.onReceive(e=>{}),t.onDisconnect(()=>{y.value=!1}),d.value=!0;let x;try{x=await T.begin(t,!0)}catch(e){v.value=e,m.value=!0,d.value=!1,t.disconnect();return}try{await x.writeFile("rtzero.py",F)}catch(e){v.value=e,m.value=!0,d.value=!1,t.disconnect();return}t.disconnect(),d.value=!1,N.value=!0,y.value=!1}const z={key:0},V=g("strong",null,"Ooops, something went wrong..",-1),H=g("br",null,null,-1),K=g("br",null,null,-1),$=g("br",null,null,-1),Y=q({__name:"RtzeroButton",props:{isNeeded:{type:Boolean}},setup(t){const x=t;return(e,f)=>{const n=R("v-btn"),s=R("v-alert");return u(G)&&x.isNeeded?(p(),L("div",z,[I(n,{loading:u(d),disabled:u(d),"prepend-icon":"mdi-download",color:"primary",onClick:u(U)},{default:S(()=>[w(" Update rtzero.py ")]),_:1},8,["loading","disabled","onClick"]),u(y)?(p(),P(s,{key:0,title:"Connected",type:"info",variant:"tonal"})):D("",!0),u(N)?(p(),P(s,{key:1,title:"Download successfully completed!!!",type:"success",variant:"tonal"})):u(m)&&!u(d)?(p(),P(s,{key:2,type:"error",variant:"tonal"},{default:S(()=>[V,H,w(" Follow these steps and try again: "),K,w(" 1. Close all the active programs"),$,w(" 2. Unplug and then reconnect the USB cable ")]),_:1})):D("",!0)])):D("",!0)}}});export{Y as _};
