import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  staticDataAray = [

    { listCode: 'USR', listFullName: 'Users', url: '/user', imgName:'Users', id:'user', description:'Create users.' },
  
    { listCode: 'APP', listFullName: 'Applications', url: '/security/application',imgName:'Applications', id:'application',description: 'Integrated Applications.' },
  
    { listCode: 'ATH', listFullName: 'Authorities', url: '/security/authority' ,imgName:'Authorities', id:'authorities',description: 'Define function of roles.' },
  
    { listCode: 'POL', listFullName: 'Policies', url: '/security/policies' ,imgName:'Policies', id:'policies',description: 'Define user log in nomenclature.' },
  
    { listCode: 'SYR', listFullName: 'System  Roles', url: '/security/systemRole' ,imgName:'SystemRoles', id:'systemrole',description: 'Set-up your various divisions & enhance reporting.' },
  
    { listCode: 'LGL', listFullName: 'Logger levels', url: '/security/loggerlevel' ,imgName:'LoggerLevels', id:'loggerlevel',description: 'View and enable transasaction log.' },
  
    { listCode: 'ADT', listFullName: 'Audit Trail', url: '/audittrail/audit' ,imgName:'AuditTrial', id:'audittrail',description: 'Countries Information.' },
  
    
  ];
}


