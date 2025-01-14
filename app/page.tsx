import DashSmTable1 from '#/ui/dash-sm-table1';
import DashSmTable2 from '#/ui/dash-sm-table2';
import HotPairs from '#/ui/dash-hotpairs';
import ColorToggleButton from '#/ui/colortogglebutton';
import MoreButton from '#/ui/more-button';
import '#/app/styling/global-css/styles.css'

// import DashSmTable2 from '#/ui/dash-sm-table2';
// import DashSmTable3 from '#/ui/dash-sm-table3';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="space-y-8">

      <div className="space-y-10 text-white">
        
        <div className="space-y-5">

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <div className="font-medium text-gray-200 group-hover:text-gray-50 dark-tb rounded-xl">
              <div className='flex justify-between pr-3'>
                <ColorToggleButton />
                <MoreButton />
              </div>
              <DashSmTable1 />
            </div>
            <div className="font-medium text-gray-200 group-hover:text-gray-50 dark-tb rounded-xl">
              <div className='flex justify-between pr-3 p-4'>
                <div className="line-clamp-3 text-sm text-white text-xl flex h-7">
                  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" viewBox="0 0 25 27" width="20" transform=""><path d="M23.5025 14.1527C23.229 14.1527 23.0052 14.3765 23.0052 14.65C23.0052 20.4186 18.3058 25.143 12.5123 25.143C6.71874 25.143 2.01928 20.4435 2.01928 14.6749C2.01928 9.13 6.32086 4.60459 11.7663 4.23161L9.5 6.58386C9.27626 6.758 9.22648 7.08112 9.40062 7.30485C9.5 7.42921 9.64934 7.5038 9.79849 7.5038C9.89788 7.5038 10.0222 7.47899 10.0968 7.40441L13.6064 4.10725C13.7307 4.00786 13.8053 3.85853 13.8053 3.68457C13.8053 3.51043 13.7059 3.36127 13.5816 3.28669C13.5816 3.28669 9.44319 1.23302 9.21945 1.08386C8.9957 0.9347 8.67242 0.984478 8.52323 1.23302C8.37407 1.45677 8.42385 1.78005 8.67239 1.92924L11.6919 3.23694C5.72433 3.63481 1 8.60775 1 14.6748C1 21.0153 6.14703 26.1623 12.4876 26.1623C18.8281 26.1625 24 21.0153 24 14.6748C24 14.4013 23.776 14.1527 23.5025 14.1527Z" fill="currentColor" stroke="currentColor" stroke-width="0.8"></path><path d="M23.7263 12.0144C23.7263 12.3576 23.4481 12.636 23.1047 12.636C22.7614 12.636 22.483 12.3576 22.483 12.0144C22.483 11.671 22.7614 11.3928 23.1047 11.3928C23.4481 11.3928 23.7263 11.671 23.7263 12.0144Z" fill="currentColor" stroke="currentColor" stroke-width="0.6"></path><path d="M22.9306 9.70194C22.9306 10.0454 22.6522 10.3236 22.309 10.3236C21.9658 10.3236 21.6874 10.0454 21.6874 9.70194C21.6874 9.3587 21.9658 9.08032 22.309 9.08032C22.6522 9.08032 22.9306 9.3587 22.9306 9.70194Z" fill="currentColor" stroke="currentColor" stroke-width="0.6"></path><path d="M21.4388 7.53867C21.4388 7.88192 21.1606 8.1603 20.8172 8.1603C20.4739 8.1603 20.1956 7.88192 20.1956 7.53867C20.1956 7.19526 20.4739 6.91705 20.8172 6.91705C21.1606 6.91705 21.4388 7.19526 21.4388 7.53867Z" fill="currentColor" stroke="currentColor" stroke-width="0.6"></path><path d="M19.375 5.67375C19.375 6.01699 19.0968 6.29537 18.7533 6.29537C18.4101 6.29537 18.1317 6.01699 18.1317 5.67375C18.1317 5.33033 18.4101 5.05212 18.7533 5.05212C19.0968 5.05212 19.375 5.33033 19.375 5.67375Z" fill="currentColor" stroke="currentColor" stroke-width="0.6"></path><path d="M16.9134 4.38078C16.9134 4.7242 16.635 5.0024 16.2918 5.0024C15.9484 5.0024 15.6702 4.7242 15.6702 4.38078C15.6702 4.03753 15.9484 3.75916 16.2918 3.75916C16.635 3.75916 16.9134 4.03753 16.9134 4.38078" fill="currentColor"></path><path d="M16.9134 4.38078C16.9134 4.7242 16.635 5.0024 16.2918 5.0024C15.9484 5.0024 15.6702 4.7242 15.6702 4.38078C15.6702 4.03753 15.9484 3.75916 16.2918 3.75916C16.635 3.75916 16.9134 4.03753 16.9134 4.38078" stroke="currentColor" stroke-width="0.6"></path></svg>
                  &nbsp;&nbsp;Recently Updated socials
                </div>
                <MoreButton />
              </div>
              
              <DashSmTable2 />
            </div>
          </div>
          <HotPairs />
        </div>
      </div>
    </div>
  );
}


