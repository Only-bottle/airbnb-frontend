import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import GithubConfirm from "./routes/GithubConfirm";
import Home from "./routes/Home";
import KakaoConfirm from "./routes/KakaoConfirm";
import NaverConfirm from "./routes/NaverConfirm";
import NotFound from "./routes/NotFound";
import RoomDetail from "./routes/RoomDetail";
import UploadRoom from "./routes/UploadRoom";
import UploadPhotos from "./routes/UploadPhotos";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "rooms/upload",
        element: <UploadRoom />,
      },
      {
        path: "rooms/:roomPk",
        element: <RoomDetail />,
      },
      {
        path: "rooms/:roomPk/photos",
        element: <UploadPhotos />,
      },
      {
        path: "social",
        children: [
          {
            path: "github",
            element: <GithubConfirm />,
          },
          {
            path: "kakao",
            element: <KakaoConfirm />,
          },
          {
            path: "naver",
            element: <NaverConfirm />,
          },
        ],
      },
    ],
  },
]);

export default router;
