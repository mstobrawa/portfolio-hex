import HexBox from "@/../components/ui/HexBox";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-y-8 gap-x-8 bg-[#FAF9F6] p-8">
      <div className="bg-hex-bg"></div>
      <h1 className="text-3xl font-bold text-[#2F2A28]">Portfolio Hex Grid</h1>

      <div className="flex gap-y-8">
        <HexBox>Ja pierdole</HexBox>
        <HexBox>2</HexBox>
        <HexBox>3</HexBox>
      </div>
      <div className="flex gap-x-20 translate-x-50">
        <HexBox>4</HexBox>
        <HexBox>5</HexBox>
      </div>
    </main>
  );
}
