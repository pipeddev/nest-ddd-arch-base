import { User, UserProps } from "./user";

describe('User Unit test', () => {

  it('should be constructor()', () => {
    let userProps: UserProps = {
      name: 'any_name',
      surname: 'any_surname',
      email: 'email_any@mail.com',
      password: 'password_any',
    };
    let user = User.create(userProps);
    expect(user.props).toEqual({
      ...userProps,
    });

    userProps = {
      name: 'any_name',
      surname: 'any_surname',
      email: 'email_any@mail.com',
      password: 'password_any',
    };

    expect(user.id).toBeDefined();
    user = User.create(userProps);
    expect(user.props).toEqual({
      ...userProps,
    });
  });

  it('should updateName method', () => {
    let userProps: UserProps = {
      name: 'any_name',
      surname: 'any_surname',
      email: 'email_any@maik.com',
      password: 'password_any'
    }
    const user = User.create(userProps);
    user.updateName('any_name_any')
    expect(user.name).toBe('any_name_any')
  });

  it('should be updateSurname method', () => {
    let userProps: UserProps = {
      name: 'any_name',
      surname: 'any_surname',
      email: 'any_email@mail.com',
      password: 'any_password',
    };
    let user = User.create(userProps);
    user.updateSurname('any_is_surname');
    expect(user.surname).toBe('any_is_surname');
  });

  it('should updateEmail method', () => {
    let userProps: UserProps = {
      name: 'any_name',
      surname: 'any_surname',
      email: 'email_any@maik.com',
      password: 'password_any'
    }
    const user = User.create(userProps);
    user.updateEmail('email_any@mail.com')
    expect(user.email).toBe('email_any@mail.com')
  })

  it('should updatePassword method', () => {
    let userProps: UserProps = {
      name: 'any_name',
      surname: 'any_surname',
      email: 'email_any@maik.com',
      password: 'password_any'
    }
    const user = User.create(userProps);
    user.updatePassword('password_any_123')
    expect(user.password).toBe('password_any_123')
  })

  it('should be toJSON() method', () => {
    let userProps: UserProps = {
      name: 'any_name',
      surname: 'any_surname',
      email: 'email_any@maik.com',
      password: 'password_any'
    }
    const user = User.create(userProps);
    expect(user.toJSON()).toStrictEqual({
      id: user.id,
      name: 'any_name',
      surname: 'any_surname',
      email: 'email_any@maik.com',
      password: 'password_any'
    });
  });
})