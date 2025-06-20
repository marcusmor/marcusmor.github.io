<!--
if(isNS)
{
	navigator.plugins.refresh();

	function RegisterEventObservers ()
	{
		var pluginJavaPeerRef = document.pvideo1;
	
		document.appObs.setByProxyDSScriptCommandObserver(pluginJavaPeerRef, true);
		document.appObs.setByProxyDSPlayStateChangeObserver(pluginJavaPeerRef, true);
		document.appObs.setByProxyDSReadyStateChangeObserver(pluginJavaPeerRef, true);
	}

	function OnDSScriptCommandEvt (scType, scParam)
	{
		alert("ScriptCommand: " + scType + ", " + scParam);
	}

	function OnDSPlayStateChangeEvt (OldPlayState, PlayState)
	{
		alert("PlayStateChange: New State=" + PlayState);
	}

	function OnDSReadyStateChangeEvt (ReadyState)
	{
		if ((ReadyState == 3) || (ReadyState == 4))
			alert("ReadyStateChange: New State=" + ReadyState);
	}

	function ToggleControls (setting)
	{
		document.pvideo1.SetShowControls(setting);
	}

	function displaySize (setting)
	{
		document.pvideo1.SetDisplaySize(setting);
	}

	function PlayClick ()
	{
		document.pvideo1.Play();
	}

	function StopClick ()
	{
		document.pvideo1.Stop();
		document.pvideo1.SetCurrentPosition(0);
	}

	function PauseClick ()
	{
		document.pvideo1.Pause();
	}


	function PlayPauseClick ()
	{
		var state;
		
		state = document.pvideo1.GetPlayState();

		if (state == 0)
		{
			document.pvideo1.Play();
			document.myform.PlayPause.value = "Pause";
		}
		else
			if (state == 1)
			{
				document.pvideo1.Play();
				document.myform.PlayPause.value = "Pause";
			}
			else
				if (state == 2)
				{
					document.pvideo1.Pause();
					document.myform.PlayPause.value = " Play";
				}
	}

	function StopClick()
	{
		document.pvideo1.Stop();
		document.pvideo1.CurrentPosition(0);
	}

	function PlayClick()
	{
		document.pvideo1.Play();
	}

	function PauseClick()
	{
		document.pvideo1.Pause();
	}

//	document.pvideo1.SetShowControls(0);
}
else
{
	function StopClick()
	{
		document.pvideo1.Stop();
		document.pvideo1.CurrentPosition = 0;
	}

	function PlayClick()
	{
		document.pvideo1.Play();
	}

	function PauseClick()
	{
		document.pvideo1.Pause();
	}
}
//-->