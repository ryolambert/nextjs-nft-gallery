import React, { Fragment } from 'react';
import { Combobox, Dialog, Transition } from '@headlessui/react';
import { FunnelIcon } from '@heroicons/react/24/solid';

import { useToggle } from '~/hooks/useToggle';

interface NftFilterProps {
	filterKey?: string;
	setFilterKey: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const NftFilter: React.FC<NftFilterProps> = ({
	filterKey,
	setFilterKey
}: NftFilterProps) => {
	const [open, toggle] = useToggle();

	const onkeydown = (e: React.KeyboardEvent) => {
		if (['Enter', 'Esc'].includes(e.key)) {
			e.preventDefault();
			toggle();
		}
		if (['e', 'E', '+', '-'].includes(e.key)) {
			e.preventDefault();
		}
	};

	return (
		<>
			<button
				type='button'
				tabIndex={0}
				aria-label='Filter NFTs by token ID number.'
				title='Filter NFTs by token ID number.'
				onClick={toggle}
				className='group fixed right-0 bottom-0 mb-5 mr-5 rounded-full border-4 border-gray-400 bg-slate-900 p-4 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 hover:border-amber-400 hover:bg-slate-900/30'
			>
				<FunnelIcon className='h-16 w-16 text-white group-hover:text-amber-400 sm:h-12 sm:w-12' />
			</button>
			<Transition appear show={open} as={Fragment}>
				<Dialog as='div' className='relative z-10' onClose={toggle}>
					<Transition.Child
						as={React.Fragment}
						enter='ease-out duration-300'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
					>
						<div className='fixed inset-0 bg-black/50 backdrop-blur-sm' />
					</Transition.Child>

					<div className='fixed inset-0 overflow-y-auto'>
						<div className='flex min-h-full items-center justify-center p-4 text-center'>
							<Transition.Child
								as={Fragment}
								enter='ease-out duration-300'
								enterFrom='opacity-0 scale-95'
								enterTo='opacity-100 scale-100'
								leave='ease-in duration-200'
								leaveFrom='opacity-100 scale-100'
								leaveTo='opacity-0 scale-95'
							>
								<Dialog.Panel className='h-full max-h-96 w-full max-w-2xl overflow-hidden rounded-2xl border-2 border-gray-400/40 bg-slate-900/95 p-6 text-left align-middle shadow-xl transition-all'>
									<Combobox value={filterKey} onChange={setFilterKey}>
										<div className='relative'>
											<FunnelIcon
												className='pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400'
												aria-hidden='true'
											/>
											<Combobox.Input
												onKeyDown={onkeydown}
												tabIndex={0}
												className='h-12 w-full rounded-lg border-0 bg-transparent pl-11 pr-4 font-sans text-2xl text-gray-400 ring-gray-400 ring-offset-4 placeholder:text-gray-400 focus:ring-1 focus:ring-gray-400 focus:ring-offset-1'
												placeholder='Filter By Token ID'
												type='text'
												inputMode='numeric'
												onChange={event => setFilterKey(event.target.value)}
											/>
										</div>
									</Combobox>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};

export default NftFilter;
