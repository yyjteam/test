﻿using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class testmove : MonoBehaviour
{

    // Use this for initialization
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {
        transform.Translate(Vector3.up * 10f * Time.deltaTime);
        transform.Rotate(Vector3.up * 10f * Time.deltaTime);
        transform.Rotate(Vector3.up * 10f * Time.deltaTime);
        transform.Rotate(Vector3.up * 10f * Time.deltaTime);
        transform.Rotate(Vector3.up * 10f * Time.deltaTime);
        transform.Translate(Vector3.up * 10f * Time.deltaTime);
        transform.Translate(Vector3.up * 10f * Time.deltaTime);
        transform.Translate(Vector3.up * 10f * Time.deltaTime);
    }
}
