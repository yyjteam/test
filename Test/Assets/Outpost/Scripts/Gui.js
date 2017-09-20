#pragma strict

var weapon : Transform;
var glasses: Transform;

function Start () {
	GetComponent.<Animation>().CrossFade("Idle");
}

function Update () {

}

function OnGUI () {
	if(GUILayout.Button("Show/Hide Weapon")){
		if(weapon.GetComponent.<Renderer>().enabled == true)
			weapon.GetComponent.<Renderer>().enabled = false;
		else
			weapon.GetComponent.<Renderer>().enabled = true;
    }
	if(GUILayout.Button("Show/Hide Glasses")){
		if(glasses.GetComponent.<Renderer>().enabled == true)
			glasses.GetComponent.<Renderer>().enabled = false;
		else
			glasses.GetComponent.<Renderer>().enabled = true;
    }
	//動作	
	if(GUILayout.Button("Idle")){
        GetComponent.<Animation>().CrossFade("Idle");
    }
	if(GUILayout.Button("Idle2")){
        GetComponent.<Animation>().CrossFade("Idle2");
    }
	if(GUILayout.Button("Walk")){
		weapon.GetComponent.<Renderer>().enabled = true;
        GetComponent.<Animation>().CrossFade("Walk");
    }
	if(GUILayout.Button("Walk2")){
		weapon.GetComponent.<Renderer>().enabled = false;
        GetComponent.<Animation>().CrossFade("Walk2");
    }
	if(GUILayout.Button("Run")){
		weapon.GetComponent.<Renderer>().enabled = true;
        GetComponent.<Animation>().CrossFade("Run");
    }
	if(GUILayout.Button("Run2")){
		weapon.GetComponent.<Renderer>().enabled = false;
        GetComponent.<Animation>().CrossFade("Run2");
    }
	if(GUILayout.Button("Jump")){
        GetComponent.<Animation>().CrossFade("Jump");
    }
	if(GUILayout.Button("AttackReady")){
        GetComponent.<Animation>().CrossFade("AttackReady");
    }
	if(GUILayout.Button("Attack01")){
        GetComponent.<Animation>().CrossFade("Attack01");
    }
	if(GUILayout.Button("Attack02")){
        GetComponent.<Animation>().CrossFade("Attack02");
    }
	if(GUILayout.Button("Attack03-1")){
		weapon.GetComponent.<Renderer>().enabled = false;
        GetComponent.<Animation>().CrossFade("Attack03-1");
    }
	if(GUILayout.Button("Attack03-2")){
		weapon.GetComponent.<Renderer>().enabled = false;
        GetComponent.<Animation>().CrossFade("Attack03-2");
    }
	if(GUILayout.Button("Attack03-3")){
		weapon.GetComponent.<Renderer>().enabled = false;
        GetComponent.<Animation>().CrossFade("Attack03-3");
    }
	if(GUILayout.Button("Wound")){
        GetComponent.<Animation>().CrossFade("Wound");
    }
	if(GUILayout.Button("HitAway")){
        GetComponent.<Animation>().CrossFade("HitAway");
    }
	if(GUILayout.Button("HitAwayUp")){
        GetComponent.<Animation>().CrossFade("HitAwayUp");
    }
}
