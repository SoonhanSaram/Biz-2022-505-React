// const [currentIndex, setCurrentIndex] = useState(0);
// const [transX, setTransX] = useState(0);
// const [{ x, y }, setPosition] = useState({
// x: 0,
// y: 0,
// });
// const swipeHandler = (e) => {
// // setCurrentIndex((currentIndex) => currentIndex + direction);
// console.log(e.screenX);
// };
// const onMouseDown = () => {
// const onMouseMove = (e) => {
// console.log(`mouse move x : ${e.screenX} y : ${e.screenY}`);
// };
// const onMouseUp = (e) => {
// console.warn(`mouse up x:${e.screenX} y:${e.screenY}`);
// document.removeEventListener("mousemove", onMouseMove);
// };
// document.addEventListener("mousemove", onMouseMove);
// document.addEventListener("mouseup", onMouseUp, { once: true });
// };

// return (
// <div className="frame">
// <div className="video-wrapper">
// <div
// className="video"
// widTh={"450px"}
// draggable={true}
// style={{
//             transform: `translateX(${x}px)`,
//           }}
// onMouseDown={(clickEvent: React.MouseEvent<Element, MouseEvent>) => {
// const mouseMoveHandler = (moveEvent: MouseEvent) => {
// // 2️⃣
// const deltaX = moveEvent.screenX - clickEvent.screenX;

// // 3️⃣
// setPosition({
// x: x + deltaX,
// });
// };

// const mouseUpHandler = () => {
// document.removeEventListener("mousemove", mouseMoveHandler);
// };

// document.addEventListener("mousemove", mouseMoveHandler);
// document.addEventListener("mouseup", mouseUpHandler, {
// once: true,
// });
// }}
// ></div>
// </div>
// </div>
// );
