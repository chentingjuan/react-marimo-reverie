export const formattedTimer = (x) => {
  const min = Math.floor(x/3600)%60;
  const sec = Math.floor(x/60)%60;
  const deg = x%60;
  return `${min<10?`0${min}`:min}:${sec<10?`0${sec}`:sec}:${deg<10?`0${deg}`:deg}`
}