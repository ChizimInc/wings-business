type IProps = {
    btnTitle: string;
}

export const PurchaseModalButton = (props: IProps) => {
    return (
        <div className="flex justify-center mt-8">
            <div className="cursor-pointer px-5 py-3 rounded bg-[#25723e] text-white text-base font-medium">
                {props.btnTitle}
            </div>
        </div>
    )
}