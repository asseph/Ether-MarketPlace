import type { NextPage } from "next";
import React, { useEffect } from "react";

interface NFTPlaceProps {
  walletConnected: boolean;
  hamburgerOpen: boolean;
}

const NFTPlace: NextPage<NFTPlaceProps> = ({
  walletConnected,
  hamburgerOpen,
}) => {
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
          Ghost Trader Membership Card #93
        </h1>
        {!walletConnected && (
          <div className="mt-4">
            <div className=" mx-auto">
              <div className="rounded-lg border-2 bg-opacity-10 shadow-lg p-2  sm:p-3 border-orange-500 bg-orange-500">
                <div className="px-3 font-medium text-white flex flex-col md:flex-row">
                  <div className="mt-3">
                    This NFT is available for purchase: $1,500.00 BUSD. Connect
                    your wallet to continue.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="w-full grid gap-8 grid-cols-1 lg:grid-cols-2 lg:max-w-none mt-6 mb-6">
          <div className="w-full">
            <div className="p-6 overflow-hidden card relative bg-dark2-500 shadow rounded-lg text-left flex flex-col text-gray-300 bg-dark2-500">
              <div className="max-w-[300px] mx-auto">
                <div className="rounded overflow-hidden ">
                  <video
                    src="https://gtr.azureedge.net/nft/0x617d66d001dafb8a4601b62d9f91c9c915ac6861/93.mp4"
                    className="w-full rounded-lg"
                    autoPlay={true}
                    loop={true}
                  ></video>
                </div>
              </div>
            </div>{" "}
            <br />
            <div className=" overflow-hidden card relative bg-dark2-500 shadow rounded-lg text-left flex flex-col text-gray-300 bg-dark2-500">
              <div className="py-5 w-full">
                <div className="flex flex-row relative mb-4">
                  <div className="px-5 text-xl text-gray-200 font-semibold">
                    NFT Details
                  </div>
                  <div className="absolute left-0 bg-orange h-full w-1.5 rounded-br-lg rounded-tr-lg"></div>
                </div>
                <div className="px-5 text-gray-300 pt-3 border-t border-gray-600 border-opacity-25 grid grid-cols-1 sm:grid-cols-2">
                  <div>
                    <table className="w-full">
                      <tbody>
                        <tr className="h-2">
                          <td className="font-bold">Contract Address:</td>
                          <td className="underline">
                            <a
                              target="_blank"
                              href="https://bscscan.com/token/0x617d66d001dafb8a4601b62d9f91c9c915ac6861"
                            >
                              0x617d...ac6861
                            </a>
                          </td>
                        </tr>
                        <tr className="h-2">
                          <td className=" font-bold">NFT ID:</td>
                          <td className="underline">
                            <a
                              target="_blank"
                              href="https://bscscan.com/token/0x617d66d001dafb8a4601b62d9f91c9c915ac6861?a=93"
                            >
                              93
                            </a>
                          </td>
                        </tr>
                        <tr className="h-2">
                          <td className=" font-bold">Download Link:</td>
                          <td className="underline">
                            <a
                              target="_blank"
                              href="https://gtr.azureedge.net/nft/0x617d66d001dafb8a4601b62d9f91c9c915ac6861/93.mp4"
                            >
                              Video
                            </a>
                          </td>
                        </tr>
                        <tr className="h-2">
                          <td className=" font-bold">Generation:</td>
                          <td className="">1</td>
                        </tr>
                        <tr className="h-2">
                          <td className=" font-bold">Rarity:</td>
                          <td className="">Genesis</td>
                        </tr>
                        <tr className="h-2">
                          <td className=" font-bold">Tier:</td>
                          <td className="">Gold</td>
                        </tr>
                        <tr className="h-2">
                          <td className=" font-bold">Reward Share:</td>
                          <td className="">52.5%</td>
                        </tr>
                        <tr className="h-2">
                          <td className=" font-bold">Mint Price:</td>
                          <td className="">$1,359</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>{" "}
            <br />
            <div className="w-full overflow-hidden card relative bg-dark2-500 shadow rounded-lg text-left flex flex-col text-gray-300 bg-dark2-500">
              <div className="py-5 w-full">
                <div className="flex flex-row relative mb-4">
                  <div className="px-5 text-xl text-gray-200 font-semibold">
                    Reward Details
                  </div>
                  <div className="absolute left-0 bg-orange h-full w-1.5 rounded-br-lg rounded-tr-lg"></div>
                </div>
                <div className="px-5 text-gray-300 pt-3 border-t border-gray-600 border-opacity-25 grid grid-cols-1 sm:grid-cols-2 w-full">
                  <div className="w-full">
                    <table className="w-full">
                      <tbody>
                        <tr className="h-2">
                          <td className=" font-bold">Active Balance:</td>
                          <td>$1,223.10 BUSD</td>
                        </tr>
                        <tr className="h-2">
                          <td className=" font-bold">
                            Pending Deposit Balance:
                          </td>
                          <td>$0 BUSD</td>
                        </tr>
                        <tr className="h-2">
                          <td className=" font-bold">
                            Pending Withdrawal Balance:
                          </td>
                          <td>$0 BUSD</td>
                        </tr>
                        <tr className="h-2">
                          <td className=" font-bold">Total Balance:</td>
                          <td>$1,223.10 BUSD</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>{" "}
            <br />
            <div className="w-full overflow-hidden card relative bg-dark2-500 shadow rounded-lg text-left flex flex-col text-gray-300 bg-dark2-500">
              <div className="py-5 w-full">
                <div className="flex flex-row relative mb-4">
                  <div className="px-5 text-xl text-gray-200 font-semibold">
                    Auto-compounding
                  </div>
                  <div className="absolute left-0 bg-orange h-full w-1.5 rounded-br-lg rounded-tr-lg"></div>
                </div>
                <div className="px-5 text-gray-300 pt-3 border-t border-gray-600 border-opacity-25 w-full">
                  <div>
                    Enabling auto-compounding allows profits to be re-invested
                    immediately. Over time, gains from auto-compounding can be
                    significant.
                  </div>
                  <div className="py-6">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      id="fader"
                      step="25"
                      list="rangelist"
                      className="w-full"
                      disabled={true}
                      value={0}
                    />
                    <datalist id="rangelist">
                      <option>0</option>
                      <option>25</option>
                      <option>50</option>
                      <option>75</option>
                      <option>100</option>
                    </datalist>
                  </div>
                  <div className="flex">
                    <div className="text-xl flex-none ">
                      <b>Compound rate:</b>{" "}
                      <span className="text-red-500">0%</span>
                    </div>
                    <div className="flex-grow"></div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="mt-6 w-full overflow-hidden card relative bg-dark2-500 shadow rounded-lg text-left flex flex-col text-gray-300 bg-dark2-500">
              <div className="py-5 w-full">
                <div className="flex flex-row relative mb-4">
                  <div className="px-5 text-xl text-gray-200 font-semibold">
                    Affiliate Code
                  </div>
                  <div className="absolute left-0 bg-orange h-full w-1.5 rounded-br-lg rounded-tr-lg"></div>
                </div>
                <div className="px-5 text-gray-300 pt-3 border-t border-gray-600 border-opacity-25 w-full">
                  GTR NFT Holders can receive earn additional rewards through
                  the affiliate program. Below is your affiliate link:
                  <br />
                  <br />
                  <div className="relative flex items-stretch flex-grow focus-within:z-10">
                    <input
                      type="text"
                      name="affiliateCode"
                      id="affiliateCode"
                      className="text-white bg-dark1-500 block w-full rounded rounded-md pl-5 sm:text-sm"
                      disabled={true}
                      value="https://app.gtr.uk/marketplace/?ref=gq3bd"
                    />
                  </div>
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 text-white">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-dark2-500 text-white">
                    <tr>
                      <th
                        scope="col"
                        className="whitespace-nowrap py-3.5 text-left text-sm font-semibold pl-5"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-6 pl-2"
                      >
                        Time
                      </th>
                      <th
                        scope="col"
                        className="whitespace-nowrap py-3.5 text-left text-sm font-semibold pl-2"
                      >
                        Reference
                      </th>
                      <th
                        scope="col"
                        className="whitespace-nowrap py-3.5 text-left text-sm font-semibold pl-2"
                      >
                        Amount
                      </th>
                      <th
                        scope="col"
                        className="relative whitespace-nowrap py-3.5 pl-3 pr-4 sm:pr-6 pl-2"
                      >
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-dark2-500 bg-dark1-500">
                    <tr>
                      <td className="whitespace-nowrap px-3 py-3 text-sm">
                        <span className="inline-flex rounded-full ml-4 text-xs font-semibold leading-5 bg-green-600 text-white-100 ">
                          &nbsp;&nbsp;C&nbsp;&nbsp;
                        </span>
                      </td>
                      <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm sm:pl-6">
                        2022-11-02
                      </td>
                      <td className="whitespace-nowrap pl-4 py-2 text-sm">
                        Reward Withdrawal
                      </td>
                      <td className="whitespace-nowrap pl-2 py-2 text-sm">
                        -$22.45
                      </td>
                      <td className="relative whitespace-nowrap py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"></td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-3 py-3 text-sm">
                        <span className="inline-flex rounded-full ml-4 text-xs font-semibold leading-5 bg-green-600 text-white-100 ">
                          &nbsp;&nbsp;C&nbsp;&nbsp;
                        </span>
                      </td>
                      <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm sm:pl-6">
                        2022-11-02
                      </td>
                      <td className="whitespace-nowrap pl-4 py-2 text-sm">
                        Reward Deposit
                      </td>
                      <td className="whitespace-nowrap pl-2 py-2 text-sm">
                        $22.45
                      </td>
                      <td className="relative whitespace-nowrap py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"></td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-3 py-3 text-sm">
                        <span className="inline-flex rounded-full ml-4 text-xs font-semibold leading-5 bg-green-600 text-white-100 ">
                          &nbsp;&nbsp;C&nbsp;&nbsp;
                        </span>
                      </td>
                      <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm sm:pl-6">
                        2022-10-02
                      </td>
                      <td className="whitespace-nowrap pl-4 py-2 text-sm">
                        Reward Withdrawal
                      </td>
                      <td className="whitespace-nowrap pl-2 py-2 text-sm">
                        -$19.46
                      </td>
                      <td className="relative whitespace-nowrap py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"></td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-3 py-3 text-sm">
                        <span className="inline-flex rounded-full ml-4 text-xs font-semibold leading-5 bg-green-600 text-white-100 ">
                          &nbsp;&nbsp;C&nbsp;&nbsp;
                        </span>
                      </td>
                      <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm sm:pl-6">
                        2022-10-02
                      </td>
                      <td className="whitespace-nowrap pl-4 py-2 text-sm">
                        Reward Deposit
                      </td>
                      <td className="whitespace-nowrap pl-2 py-2 text-sm">
                        $19.46
                      </td>
                      <td className="relative whitespace-nowrap py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"></td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-3 py-3 text-sm">
                        <span className="inline-flex rounded-full ml-4 text-xs font-semibold leading-5 bg-green-600 text-white-100 ">
                          &nbsp;&nbsp;C&nbsp;&nbsp;
                        </span>
                      </td>
                      <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm sm:pl-6">
                        2022-09-02
                      </td>
                      <td className="whitespace-nowrap pl-4 py-2 text-sm">
                        Reward Withdrawal
                      </td>
                      <td className="whitespace-nowrap pl-2 py-2 text-sm">
                        -$25.71
                      </td>
                      <td className="relative whitespace-nowrap py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"></td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-3 py-3 text-sm">
                        <span className="inline-flex rounded-full ml-4 text-xs font-semibold leading-5 bg-green-600 text-white-100 ">
                          &nbsp;&nbsp;C&nbsp;&nbsp;
                        </span>
                      </td>
                      <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm sm:pl-6">
                        2022-09-02
                      </td>
                      <td className="whitespace-nowrap pl-4 py-2 text-sm">
                        Reward Deposit
                      </td>
                      <td className="whitespace-nowrap pl-2 py-2 text-sm">
                        $25.71
                      </td>
                      <td className="relative whitespace-nowrap py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"></td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-3 py-3 text-sm">
                        <span className="inline-flex rounded-full ml-4 text-xs font-semibold leading-5 bg-green-600 text-white-100 ">
                          &nbsp;&nbsp;C&nbsp;&nbsp;
                        </span>
                      </td>
                      <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm sm:pl-6">
                        2022-08-02
                      </td>
                      <td className="whitespace-nowrap pl-4 py-2 text-sm">
                        Reward Withdrawal
                      </td>
                      <td className="whitespace-nowrap pl-2 py-2 text-sm">
                        -$26.05
                      </td>
                      <td className="relative whitespace-nowrap py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"></td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-3 py-3 text-sm">
                        <span className="inline-flex rounded-full ml-4 text-xs font-semibold leading-5 bg-green-600 text-white-100 ">
                          &nbsp;&nbsp;C&nbsp;&nbsp;
                        </span>
                      </td>
                      <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm sm:pl-6">
                        2022-08-02
                      </td>
                      <td className="whitespace-nowrap pl-4 py-2 text-sm">
                        Reward Deposit
                      </td>
                      <td className="whitespace-nowrap pl-2 py-2 text-sm">
                        $26.05
                      </td>
                      <td className="relative whitespace-nowrap py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"></td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-3 py-3 text-sm">
                        <span className="inline-flex rounded-full ml-4 text-xs font-semibold leading-5 bg-green-600 text-white-100 ">
                          &nbsp;&nbsp;C&nbsp;&nbsp;
                        </span>
                      </td>
                      <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm sm:pl-6">
                        2022-07-02
                      </td>
                      <td className="whitespace-nowrap pl-4 py-2 text-sm">
                        Reward Withdrawal
                      </td>
                      <td className="whitespace-nowrap pl-2 py-2 text-sm">
                        -$19.53
                      </td>
                      <td className="relative whitespace-nowrap py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"></td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-3 py-3 text-sm">
                        <span className="inline-flex rounded-full ml-4 text-xs font-semibold leading-5 bg-green-600 text-white-100 ">
                          &nbsp;&nbsp;C&nbsp;&nbsp;
                        </span>
                      </td>
                      <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm sm:pl-6">
                        2022-07-02
                      </td>
                      <td className="whitespace-nowrap pl-4 py-2 text-sm">
                        Reward Deposit
                      </td>
                      <td className="whitespace-nowrap pl-2 py-2 text-sm">
                        $19.53
                      </td>
                      <td className="relative whitespace-nowrap py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"></td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-3 py-3 text-sm">
                        <span className="inline-flex rounded-full ml-4 text-xs font-semibold leading-5 bg-green-600 text-white-100 ">
                          &nbsp;&nbsp;C&nbsp;&nbsp;
                        </span>
                      </td>
                      <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm sm:pl-6">
                        2022-05-28
                      </td>
                      <td className="whitespace-nowrap pl-4 py-2 text-sm">
                        Reward Withdrawal
                      </td>
                      <td className="whitespace-nowrap pl-2 py-2 text-sm">
                        -$32.14
                      </td>
                      <td className="relative whitespace-nowrap py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"></td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-3 py-3 text-sm">
                        <span className="inline-flex rounded-full ml-4 text-xs font-semibold leading-5 bg-green-600 text-white-100 ">
                          &nbsp;&nbsp;C&nbsp;&nbsp;
                        </span>
                      </td>
                      <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm sm:pl-6">
                        2022-05-28
                      </td>
                      <td className="whitespace-nowrap pl-4 py-2 text-sm">
                        Reward Deposit
                      </td>
                      <td className="whitespace-nowrap pl-2 py-2 text-sm">
                        $32.14
                      </td>
                      <td className="relative whitespace-nowrap py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"></td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-3 py-3 text-sm">
                        <span className="inline-flex rounded-full ml-4 text-xs font-semibold leading-5 bg-green-600 text-white-100 ">
                          &nbsp;&nbsp;C&nbsp;&nbsp;
                        </span>
                      </td>
                      <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm sm:pl-6">
                        2022-05-03
                      </td>
                      <td className="whitespace-nowrap pl-4 py-2 text-sm">
                        Reward Withdrawal
                      </td>
                      <td className="whitespace-nowrap pl-2 py-2 text-sm">
                        -$31.93
                      </td>
                      <td className="relative whitespace-nowrap py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"></td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-3 py-3 text-sm">
                        <span className="inline-flex rounded-full ml-4 text-xs font-semibold leading-5 bg-green-600 text-white-100 ">
                          &nbsp;&nbsp;C&nbsp;&nbsp;
                        </span>
                      </td>
                      <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm sm:pl-6">
                        2022-05-03
                      </td>
                      <td className="whitespace-nowrap pl-4 py-2 text-sm">
                        Reward Deposit
                      </td>
                      <td className="whitespace-nowrap pl-2 py-2 text-sm">
                        $31.93
                      </td>
                      <td className="relative whitespace-nowrap py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"></td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-3 py-3 text-sm">
                        <span className="inline-flex rounded-full ml-4 text-xs font-semibold leading-5 bg-green-600 text-white-100 ">
                          &nbsp;&nbsp;C&nbsp;&nbsp;
                        </span>
                      </td>
                      <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm sm:pl-6">
                        2022-03-30
                      </td>
                      <td className="whitespace-nowrap pl-4 py-2 text-sm">
                        NFT Purchase
                      </td>
                      <td className="whitespace-nowrap pl-2 py-2 text-sm">
                        $1,223.10
                      </td>
                      <td className="relative whitespace-nowrap py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NFTPlace;
