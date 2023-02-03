import { cl } from '~/lib/utils';

interface SkeletonLoaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
	className,
	...props
}: SkeletonLoaderProps) => {
	return (
		<div
			className={cl(
				'h-5 w-2/5 animate-pulse rounded-lg bg-slate-100',
				className
			)}
			{...props}
		/>
	);
};

export default SkeletonLoader;
