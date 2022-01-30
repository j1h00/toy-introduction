import Landing from "../components/landing";
import Description from "../components/Description";
import Cursor from "../components/cursor2";

export default function Home() {
  return (
    <div className="h-full bg-black">
      <Cursor />
      <Landing />;
      <Description />
    </div>
  );
}
