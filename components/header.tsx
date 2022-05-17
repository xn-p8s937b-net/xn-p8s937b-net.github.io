
interface HeaderProps {

}

export default function Header(props: HeaderProps) {
    return (
        <div>
            <h1 className="text-6xl font-bold">
                Welcome to{' '}
                <span className="text-orange-500">
                    漢字.net
                </span>
            </h1>

            <p className="mt-3 text-2xl">
                A portal for CJKV 'Han' Ideograms
            </p>
        </div>
    )
}