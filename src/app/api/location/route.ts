import { NextResponse } from "next/server"
import { faker } from '@faker-js/faker';

export async function GET() {
  const data = {
    address: {
      street: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state()
    },
    executionTime: faker.helpers.rangeToNumber({ min: 1, max: 100 })
  }
  return NextResponse.json(data)
}