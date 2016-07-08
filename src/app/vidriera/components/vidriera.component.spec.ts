/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { VidrieraComponent } from './vidriera.component';
import { VidrieraService } from '../services/vidriera.service';

describe('Component: Vidriera', () => {
  it('should create an instance', () => {
    let component = new VidrieraComponent(new VidrieraService());
    expect(component).toBeTruthy();
  });
});
