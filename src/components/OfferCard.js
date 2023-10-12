import { OFFER_ICON } from "../utils/constants";

const OfferCard = (props) => {
  const { data } = props;
  //   console.log("offer data", data);
  const { header, description, couponCode, offerTag } = data?.info;

  console.log("Offer Tag: ", offerTag);

  return (
    <div className="flex border-[1.5px] space-x-2 rounded-lg cursor-pointer">
      <div className="w-max flex items-center text-[8px] font-bold text-red-600 -rotate-90 border-b-[1px] my-4 pb-1">
        {offerTag ? `${offerTag}` : ""}
      </div>
      <div className="w-max pr-3 flex flex-col justify-center gap-1">
        <p className="flex items-center gap-2 text-xs font-semibold text-slate-600">
          <img src={OFFER_ICON} width="18px" />
          {header}
        </p>
        <p className="text-[10px] text-slate-600 font-semibold tracking-tighter">
          {couponCode} | {description}
        </p>
      </div>
    </div>
  );
};

export default OfferCard;
