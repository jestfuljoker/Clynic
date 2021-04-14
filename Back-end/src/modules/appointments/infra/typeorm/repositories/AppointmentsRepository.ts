import { getRepository, Repository } from 'typeorm';

import Appoitment from '@modules/appointments/infra/typeorm/entities/Appointment';
import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';
import ICreateAppointmentDTO from '@modules/appointments/dtos/ICreateAppointmentDTO';

class AppointmentsRepository implements IAppointmentsRepository {
  private ormRepository: Repository<Appoitment>;

  constructor() {
    this.ormRepository = getRepository(Appoitment);
  }

  public async findByDate(date: Date): Promise<Appoitment | undefined> {
    const findAppointment = await this.ormRepository.findOne({
      where: { date },
    });

    return findAppointment;
  }

  public async create({ date, provider_id }: ICreateAppointmentDTO): Promise<Appoitment> {
    const appointment = this.ormRepository.create({ date, provider_id });

    await this.ormRepository.save(appointment);

    return appointment;
  }
}

export default AppointmentsRepository;
