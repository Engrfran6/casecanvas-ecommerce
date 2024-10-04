'use server';

import {db} from '@/db';
import {convertTo24ByteChar} from '@/lib/utils';
import {getKindeServerSession} from '@kinde-oss/kinde-auth-nextjs/server';

export const getAuthStatus = async () => {
  const {getUser} = getKindeServerSession();
  const user = await getUser();

  if (!user?.id || !user.email) {
    throw new Error('Invalid user data');
  }

  const existingUser = await db.user.findFirst({
    where: {id: convertTo24ByteChar(user.id)},
  });

  if (!existingUser) {
    await db.user.create({
      data: {
        id: convertTo24ByteChar(user.id),
        email: user.email,
      },
    });
  }

  return {success: true};
};
