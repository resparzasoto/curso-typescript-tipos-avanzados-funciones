enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer',
}

type User = {
  username: string;
  role: ROLES;
};

const exampleUser = {
  username: '@resparzasoto',
  role: ROLES.ADMIN,
};

export { ROLES, User };
