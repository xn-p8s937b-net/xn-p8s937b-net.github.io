
interface HeaderProps {

}

export default function Header(props: HeaderProps) {
    return (
        <div className="mt-16 mx-4">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
                Welcome to{' '}
                <span className="text-orange-500">
                    漢字.net
                </span>
            </h1>

            <p className="mt-3 text-md md:text-xl lg:text-2xl">
                A portal for CJKV 'Han' Ideograms
            </p>
        </div>
    )
}