import type { NextPage } from "next";
import Link from "next/link";
import React, { useEffect } from "react";
import { itemState } from "@/Global/interface";
import { providers, ethers } from "ethers";
import { SMARTCONTACT_ADDRESS, TEST_ABI } from "../../config/config";

interface MarketPlaceProps {
  itemList: itemState[];
  walletConnected: boolean;
  address: string;
  hamburgerOpen: boolean;
}

const MarketPlace: NextPage<MarketPlaceProps> = ({
  itemList,
  walletConnected,
  address,
  hamburgerOpen,
}) => {
  const clim = async () => {
    const web3Provider = new providers.Web3Provider(window.ethereum as any);
    const signer = web3Provider.getSigner();
    const contract = new ethers.Contract(
      SMARTCONTACT_ADDRESS,
      TEST_ABI,
      signer
    );
    console.log(contract);
    try {
      await contract.claim(
        address,
        2,
        1,
        "0x4912A32e4532Ea58c54c5A00b174756Df0B9E971",
        10000000,
        [
          0x0000000000000000000000000000000000000000000000000000000000000000,
          115792089237316195423570985008687907853269984665640564039457584007913129639935,
          10000000,
          "0x07865c6E87B9F70255377e024ace6630C1Eaa37F",
        ],
        0x00,
        { value: 0 }
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className={
        hamburgerOpen
          ? "sm:flex flex-col w-100 flex-1 px-6 lg:px-8 overflow-y-auto py-4 bg-secondary flex"
          : "sm:flex flex-col w-100 flex-1 px-6 lg:px-8 overflow-y-auto py-4 bg-secondary hidden"
      }
    >
      <main className="flex flex-col w-100 flex-1 relative focus:outline-none">
        <h1 className="text-[#F4CA64]  text-left text-3xl font-bold">
          Current listings
        </h1>
        <h2 className="text-white pt-5">
          Buy and Sell Ghost Trader NFTs using the GTR NFT Marketplace.
        </h2>
        <div className="my-4 overflow-x-auto sm:-mx-6 lg:-mx-8 text-white hidden md:block">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-[#161717] text-white">
                  <tr>
                    <th
                      scope="col"
                      className="whitespace-nowrap py-3.5 text-left text-sm font-semibold pl-5"
                    >
                      Image
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap py-3.5 text-left text-sm font-semibold "
                    >
                      Tier
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap py-3.5 text-left text-sm font-semibold "
                    >
                      Reward Share
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap py-3.5 text-left text-sm font-semibold "
                    >
                      Token ID
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap py-3.5 text-left text-sm font-semibold "
                    >
                      Total Balance
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap py-3.5 text-left text-sm font-semibold "
                    >
                      Listed Price
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap py-3.5 text-left text-sm font-semibold "
                    >
                      Diff +/-
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap py-3.5 text-left text-sm font-semibold "
                    ></th>
                    <th
                      scope="col"
                      className="whitespace-nowrap py-3.5 text-left text-sm font-semibold "
                    ></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#161717] bg-dark1-500">
                  <tr className="cursor-pointer hover:bg-[#161717]">
                    <td className="whitespace-nowrap py-2 text-sm sm:pl-6">
                      <img
                        src="https://gtr.azureedge.net/nft/0xfe5976756a2b9990f5a831763b7634861bc83fd4/1.png"
                        className="h-20"
                      />
                    </td>
                    <td className="whitespace-nowrap pl-2 py-2 text-sm">
                      Silver
                    </td>
                    <td className="whitespace-nowrap pl-2 py-2 text-sm">50%</td>
                    <td className="whitespace-nowrap pl-2 py-2 text-sm">#</td>
                    <td className="whitespace-nowrap pl-2 py-2 text-sm">
                      $1,223.10
                    </td>
                    <td className="whitespace-nowrap pl-2 py-2 text-sm">
                      $1,359.00
                    </td>
                    <td className="whitespace-nowrap py-2 pr-6 text-sm">0%</td>
                    <td className="whitespace-nowrap py-2 pr-6 text-sm">
                      {walletConnected ? (
                        <button
                          className="w-full flex-none h-11 inline-block bg-[#F4CA64] py-2 px-4 border border-transparent rounded-md text-base font-medium text-dark1-500 hover:bg-[#161717] hover:text-[#F4CA64] hover:border hover:border-[#F4CA64] disabled:bg-[#161717] disabled:text-gray-500 disabled:border disabled:border-gray-500"
                          onClick={clim}
                        >
                          Mint NFT
                        </button>
                      ) : (
                        <button
                          className="w-full flex-none h-11 inline-block bg-[#F4CA64] py-2 px-4 border border-transparent rounded-md text-base font-medium text-dark1-500 hover:bg-[#161717] hover:text-[#F4CA64] hover:border hover:border-[#F4CA64] disabled:bg-[#161717] disabled:text-gray-500 disabled:border disabled:border-gray-500"
                          disabled={true}
                        >
                          CONNECT WALLET
                        </button>
                      )}
                    </td>
                  </tr>
                  {itemList.map((item, _index) => {
                    return (
                      <tr
                        className="cursor-pointer hover:bg-[#161717]"
                        key={_index}
                      >
                        <td className="whitespace-nowrap py-2 text-sm sm:pl-6">
                          <img src={item.image} className="h-20" />
                        </td>
                        <td className="whitespace-nowrap pl-2 py-2 text-sm">
                          {item.tier}
                        </td>
                        <td className="whitespace-nowrap pl-2 py-2 text-sm">
                          {item.reward}%
                        </td>
                        <td className="whitespace-nowrap pl-2 py-2 text-sm">
                          {item.tokenId}
                        </td>
                        <td className="whitespace-nowrap pl-2 py-2 text-sm">
                          ${item.totalbalance}
                        </td>
                        <td className="whitespace-nowrap pl-2 py-2 text-sm">
                          ${item.listedPrice}
                        </td>
                        <td className="whitespace-nowrap py-2 pr-6 text-sm text-red-500">
                          +{item.diff}%
                        </td>
                        <td className="whitespace-nowrap py-2 pr-6 text-sm">
                          <Link
                            className="inline-block text-center w-full bg-[#F4CA64] py-2 px-4 border border-transparent rounded-md text-base font-medium text-dark1-500 hover:bg-[#161717] hover:text-[#F4CA64] hover:border hover:border-[#F4CA64] uppercase"
                            href="/nfts"
                          >
                            Detail
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="w-full grid gap-4 grid-cols-2 mt-6 mb-3 block md:hidden">
          <div className="border-[#161717] bg-[#161717] text-white border rounded-lg">
            <div
              className="h-48 w-full bg-cover bg-no-repeat bg-center rounded-lg"
              style={{
                backgroundImage:
                  'url("https://gtr.azureedge.net/nft/0xfe5976756a2b9990f5a831763b7634861bc83fd4/1.png")',
              }}
            ></div>
            <div className="px-4 pt-2 text-md font-bold text-center">
              SILVER #
            </div>
            <div className="px-4 text-sm text-center">
              <span className="text-xs text-gray-500">REWARD SHARE</span>
              <br />
              50%
            </div>
            <div className="px-4 text-sm text-center">
              <span className="text-xs text-gray-500">ACTIVE BALANCE</span>
              <br />
              1,223.10
            </div>
            <div className="px-4 pb-2 text-sm text-center">
              <span className="text-xs text-gray-500">LISTING PRICE</span>
              <br />
              $1,359.00
            </div>
            <div className="whitespace-nowrap text-sm">
              {walletConnected ? (
                <button
                  className="w-full flex-none h-11 inline-block bg-[#F4CA64] py-2 px-4 border border-transparent rounded-md text-base font-medium text-dark1-500 hover:bg-[#161717] hover:text-[#F4CA64] hover:border hover:border-[#F4CA64] disabled:bg-[#161717] disabled:text-gray-500 disabled:border disabled:border-gray-500"
                  onClick={clim}
                >
                  Mint NFT
                </button>
              ) : (
                <button
                  className="w-full flex-none h-11 inline-block bg-[#F4CA64] py-2 px-4 border border-transparent rounded-md text-base font-medium text-dark1-500 hover:bg-[#161717] hover:text-[#F4CA64] hover:border hover:border-[#F4CA64] disabled:bg-[#161717] disabled:text-gray-500 disabled:border disabled:border-gray-500"
                  disabled={true}
                >
                  CONNECT WALLET
                </button>
              )}
            </div>
          </div>
          {itemList.map((item, _index) => {
            return (
              <div className="border-[#161717] bg-[#161717] text-white border rounded-lg">
                <div
                  className="h-48 w-full bg-cover bg-no-repeat bg-center rounded-lg"
                  style={{
                    backgroundImage: `url(${item.image});`,
                  }}
                ></div>
                <div className="px-4 pt-2 text-md font-bold text-center">
                  ${item.tier + " #" + item.tokenId}
                </div>
                <div className="px-4 text-sm text-center">
                  <span className="text-xs text-gray-500">REWARD SHARE</span>
                  <br />${item.reward}%
                </div>
                <div className="px-4 text-sm text-center">
                  <span className="text-xs text-gray-500">ACTIVE BALANCE</span>
                  <br />${item.totalbalance}
                </div>
                <div className="px-4 pb-2 text-sm text-center">
                  <span className="text-xs text-gray-500">LISTING PRICE</span>
                  <br />${item.listedPrice}
                </div>
                <div className="whitespace-nowrap text-sm">
                  <Link
                    className="inline-block text-center w-full bg-primary-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-dark1-500 hover:bg-[#161717] hover:text-primary-500 hover:border hover:border-primary-500"
                    href="/nfts"
                  >
                    DETAIL
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default MarketPlace;
