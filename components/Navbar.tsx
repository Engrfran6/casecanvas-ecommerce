// components/Navbar.js
import NavbarClient from './NavbarClient';
import MaxWidthWrapper from './MaxWidthWrapper';
import {getKindeServerSession} from '@kinde-oss/kinde-auth-nextjs/server';
import NewsNavbar from './NewsNavbar';

const Navbar = async () => {
  const {getUser} = getKindeServerSession();
  const user = await getUser();

  const isAdmin = user?.email === process.env.ADMIN_EMAIL;
  const cartEmpty = false;

  return (
    <div>
      <div className="h-10 md:h-14 w-full bg-gray-900 text-white flex justify-center items-center">
        <NewsNavbar />
      </div>
      <MaxWidthWrapper>
        <NavbarClient user={user} isAdmin={isAdmin} cartEmpty={cartEmpty} />
      </MaxWidthWrapper>
    </div>
  );
};

export default Navbar;
