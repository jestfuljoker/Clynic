import AppError from '@shared/Errors/AppError';
import 'reflect-metadata';
import FakeUserRepository from '../repositories/fakes/FakeUserRepository';
import ShowProfileService from './ShowProfileService';

let fakeUsersRepository: FakeUserRepository;
let showProfile: ShowProfileService;

describe('UpdateProfile', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUserRepository();

    showProfile = new ShowProfileService(fakeUsersRepository);
  });

  it('should be able to show the profile', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Jhon Doe',
      email: 'jhondoe@example.com',
      password: '123456',
    });

    const profile = await showProfile.execute({
      user_id: user.id,
    });

    expect(profile.name).toBe('Jhon Doe');
    expect(profile.email).toBe('jhondoe@example.com');
  });

  it('should not be able to show the profile from non existing user', async () => {
    expect(showProfile.execute({
      user_id: 'non-existing-user',
    })).rejects.toBeInstanceOf(AppError);
  });
});
