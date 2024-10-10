import StakingWidget from "@trustswap/web-widgets/staking";
import { modal } from "@/blockchain-provider";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <button
        onClick={() => {
          modal.open();
        }}
      >
        open
      </button>

      <Link href="/crash">
        <div>Test</div>
      </Link>

      <StakingWidget
        chainId={11155111}
        stakingPoolAddress="0x81C096Dbf83C13E578b0FdC5840DDe9e340a00cA"
        poolId={0}
      />
    </div>
  );
}
