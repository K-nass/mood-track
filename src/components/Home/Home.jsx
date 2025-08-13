import React from "react";
import AverageMoodCard from "../AverageMoodCard/AverageMoodCard";
import { Outlet, useLocation } from "react-router-dom";
import WelcomeBanner from "../WelcomeBanner/WelcomeBanner";
import NavPage from "../NavPage/NavPage";
import Overlay from "../Overlay/Overlay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
<FontAwesomeIcon icon={faArrowRight} />;

export default function Home() {
  const location = useLocation();
  const isOverlayOpen = location.pathname === "/logmood";
  return (
    <div className="relative container mx-auto px-2 py-5">
      <NavPage />
      <WelcomeBanner />

      {isOverlayOpen && (
        <Overlay>
          <Outlet />
        </Overlay>
      )}

      <div className="mt-20 flex w-full gap-10">
        <div className="basis-80 bg-white">
          <div className="mb-5">
            <h3 className="mb-5 text-2xl font-medium text-[#22224f]">
              Average Mood
              <span className="ms-2 text-sm text-gray-600">
                Last 5 Check-ins
              </span>
            </h3>
            <AverageMoodCard type="averageMood">
              <div className="mt-3 flex items-center gap-3">
                <img src="images/icon-sad-white.svg" alt="" />
                <h4 className="text-2xl font-bold text-[#22224f]">Sad</h4>
              </div>
              <p className="mt-3 flex gap-3">
                <img src="images/icon-trend-same.svg" alt="" />
                <span className="text-sm font-bold text-white">
                  Same as the previous 5 check-ins
                </span>
              </p>
            </AverageMoodCard>
          </div>
          <div>
            <h3 className="mb-5 text-2xl font-medium text-[#22224f]">
              Average Sleep
              <span className="ms-2 text-sm text-gray-600">
                (Last 5 Check-ins)
              </span>
            </h3>
            <AverageMoodCard>
              <div className="mt-3 flex items-center gap-3">
                <img src="images/icon-sleep.svg" alt="" />
                <h4 className="text-2xl font-bold text-[#22224f]">5-6 hours</h4>
              </div>
              <p className="mt-3 flex gap-3">
                <img src="images/icon-trend-same.svg" alt="" />
                <span className="text-sm font-bold text-white">
                  Same as the previous 5 check-ins
                </span>
              </p>
            </AverageMoodCard>
          </div>
        </div>
        <div className="basis-9/12 bg-blue-500">chart</div>
      </div>
    </div>
  );
}
